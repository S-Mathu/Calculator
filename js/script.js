// Function to append values to the display
function appendValue(value) {
    const display = document.getElementById("display");
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}

// Function to reset the calculator
function resetCalculator() {
    clearDisplay();
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById("display");
    try {
        // Evaluate the expression entered
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error"; // Handle invalid input
    }
}
//finally finished.