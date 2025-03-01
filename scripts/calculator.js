const error_message = "ERROR";

const display = document.getElementById("display");

setDisplay(load('input'));

function setDisplay(input) {
    display.value = input;
    save('input', display.value);
}

function appendToDisplay(input) {
    if (display.value == error_message) {
        clearDisplay();
    }
    setDisplay(display.value + input);
}

function clearDisplay() {
    setDisplay(""); 
}

function calculate() {
    try {
        setDisplay(eval(display.value.replace("×", "*").replace("÷", "/")));
    }
    catch(error) {
        setDisplay(error_message);
        console.warn("Could not calculate expression '" + display.value + "': " + error);
    }

}
