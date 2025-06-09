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
     display.value = eval(display.value);
}