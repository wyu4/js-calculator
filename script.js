const error_message = "ERROR";

const display = document.getElementById("display");

function appendToDisplay(input) {
    if (display.value == error_message) {
        clearDisplay();
    }
    display.value += input;
}

function clearDisplay() {
    display.value = ""; 
}

function calculate() {
    try {
        display.value = eval(display.value.replace("×", "*").replace("÷", "/"));
    }
    catch(error) {
        display.value = error_message;
        console.warn("Error calculating: " + error)
    }
}