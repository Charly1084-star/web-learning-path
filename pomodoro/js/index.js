let pomodoro = document.getElementById("pomodoro-timer");
let short = document.getElementById("short-timer");
let long = document.getElementById("long-timer");
let timers = document.querySelectorAll(".timer-display");
let session = document.getElementById("pomodoro-session");
let shortBreak = document.getElementById("short-break");
let longBreak = document.getElementById("long-break");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let timerMsg = document.getElementById("timer-message");

let completedCycles = 0;
let currentTimer = null;
let myInterval = null;
let paused = false;
let remainingTime = 0;
let endTimestamp = null;

function showDefaultTimer() {
     pomodoro.style.display = "block";
     short.style.display = "none";
     long.style.display = "none";
}
showDefaultTimer();

function hideAll() {
     timers.forEach(timer => timer.style.display = "none");
}

session.addEventListener("click", () => {
     hideAll();
     pomodoro.style.display = "block";
     session.classList.add("active");
     shortBreak.classList.remove("active");
     longBreak.classList.remove("active");
     currentTimer = pomodoro;
});

shortBreak.addEventListener("click", () => {
     hideAll();
     short.style.display = "block";
     session.classList.remove("active");
     shortBreak.classList.add("active");
     longBreak.classList.remove("active");
     currentTimer = short;
});

longBreak.addEventListener("click", () => {
     hideAll();
     long.style.display = "block";
     session.classList.remove("active");
     shortBreak.classList.remove("active");
     longBreak.classList.add("active");
     currentTimer = long;
});

function startTimer(timerDisplay) {
     if (myInterval) clearInterval(myInterval);

     if (paused && remainingTime > 0) {
          endTimestamp = Date.now() + remainingTime;
     } else {
          let timerDuration = timerDisplay.getAttribute("data-duration").split(":")[0];
          endTimestamp = Date.now() + timerDuration * 60 * 1000;
     }

     paused = false;

     myInterval = setInterval(() => {
          remainingTime = endTimestamp - Date.now();
          let endTime = new Date(endTimestamp);
          let hours = endTime.getHours();
          let minutes = endTime.getMinutes().toString().padStart(2, "0");
          let suffix = hours >= 12 ? "p. m." : "a. m.";
          hours = (hours % 12) || 12;

          document.getElementById("end-time-display").textContent = `⏳ ${hours}:${minutes} ${suffix}`;
          if (remainingTime <= 0) {
               clearInterval(myInterval);
               timerDisplay.textContent = "00:00";
               completedCycles++;
               document.getElementById("cycle-count").textContent = `Ciclos completados: ${completedCycles}`;
               startAlarm();
               document.body.classList.add("vibrate");
               document.getElementById("end-time-display").textContent = "";
          } else {
               const minutes = Math.floor(remainingTime / 60000);
               const seconds = Math.floor((remainingTime % 60000) / 1000);
               timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
          }
     }, 1000);

     stopBtn.textContent = "STOP";
     stopBtn.style.backgroundColor = "";
}

function startAlarm() {
     const alarm = new Audio("alarma.mp3");
     alarm.loop = true;
     alarm.volume = 1.0;
     alarm.play();
     document.body.classList.add("vibrate");

     if (Notification.permission === "granted") {
          const notification = new Notification("⏰ Pomodoro finalizado", {
               body: document.getElementById("end-time-display").textContent = "",
               icon: "https://cdn-icons-png.flaticon.com/512/1611/1611318.png"
          });

          notification.onclick = () => {
               alarm.pause();
               alarm.currentTime = 0;
               document.body.classList.remove("vibrate");
               window.focus();
          };
     } else if (Notification.permission !== "denied") {
          Notification.requestPermission().then(permission => {
               if (permission === "granted") startAlarm();
          });
     }
}

startBtn.addEventListener("click", () => {
     if (currentTimer) {
          startTimer(currentTimer);
          timerMsg.style.display = "none";
     } else {
          timerMsg.style.display = "block";
     }
});

stopBtn.addEventListener("click", () => {
     if (!currentTimer) return;

     if (!paused) {
          clearInterval(myInterval);
          remainingTime = endTimestamp - Date.now();
          paused = true;
          stopBtn.textContent = "RESUME";
          stopBtn.style.backgroundColor = "orange";
          document.getElementById("end-time-display").textContent = "";

     } else {
          startTimer(currentTimer);
          stopBtn.textContent = "STOP";
          stopBtn.style.backgroundColor = "";
     }
});

const customInput = document.getElementById("custom-minutes");
const applyTimeBtn = document.getElementById("apply-time");

applyTimeBtn.addEventListener("click", () => {
     if (!currentTimer) return;
     let newMinutes = parseInt(customInput.value);
     if (isNaN(newMinutes) || newMinutes <= 0) return;

     currentTimer.setAttribute("data-duration", `${newMinutes}:00`);
     currentTimer.textContent = `${newMinutes}:00`;

     clearInterval(myInterval);
     paused = false;
     remainingTime = 0;
});

const customSettings = document.getElementById("custom-settings");

function showCustomInputs() {
     customSettings.style.display = "block";
}
function hideCustomInputs() {
     customSettings.style.display = "none";
}




session.addEventListener("click", showCustomInputs);
shortBreak.addEventListener("click", showCustomInputs);
longBreak.addEventListener("click", showCustomInputs);

hideCustomInputs(); // al iniciar
