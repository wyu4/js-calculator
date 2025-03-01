const error_message = "ERROR";

const display = document.getElementById("display");

appendToDisplay(load('input'));

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
        console.warn("Could not calculate expression '" + display.value + "': " + error)
    }
    
    save('input', display.value);
}