const display = document.getElementById("display")

// f/(appenToDisplay)
function appenToDisplay(input) {
     display.value += input;
}

// f(clear)
function clearDisplay() {
     display.value = "";
}
// f(calculate)
function calculate() {
     try {
          display.value = eval(display.value);
     } catch(error) {
          display.value = "Error";
     }
}