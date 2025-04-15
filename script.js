function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    if(b == 0) { throw new Error(); }
    return a / b;
}

function operate(op, a, b)
{
    switch(op)
    {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            if(b == 0) return Number.NaN;
            return divide(a, b);
        default:
            alert("VERY BAD");
    }
}

let num1 = null;
let num2 = null;
let operator = null;
let display = "";

// Fetch DOM Elements
const displayText = document.querySelector("#display");
const clearButton = document.querySelector("#clearButton");
const equalsButton = document.querySelector("#equalsButton");
const numButtons = document.querySelectorAll(".numButton");
const operatorButtons = document.querySelectorAll(".operatorButton");

// Number Button Event Listeners
numButtons.forEach(element => {
    element.addEventListener("click", function (e)
    {
        // If we have a previous calculation and user enters a new number, we want to clear the display and start a new calculation
        if(num1 != null && operator == null) display = "";
        // Adds a number to the display
        let buttonNumber = e.target.textContent;
        display += buttonNumber;
        displayText.textContent = display;
    });
});

// Operator button Listeners
operatorButtons.forEach(element => {
    element.addEventListener("click", function (e)
    {
        // If they try to click the operator button twice, it doesnt work.
        if(operator != null) return;
        let buttonOperator = e.target.textContent;
        // If we are not carrying over a number, evaluate the display
        if(num1 == null) { num1 = parseInt(display); }
        operator = buttonOperator;
        display = "";
    });
});

// Clear button resets all variables back to default
clearButton.addEventListener("click", () =>
{
    num1 = null;
    num2 = null;
    operator = null;
    display = "";
    
    displayText.textContent = display;
});

// Equals button listener
equalsButton.addEventListener("click", () =>
{
    // Make sure we have at least the first number and an operator
    if(num1 == null || operator == null) return;

    // Store second number and get result
    num2 = parseInt(display);
    let result = operate(operator, num1, num2);
    result = Math.round(result * 10) / 10;

    // Store result in num1 for future calculations, reset the other two
    num1 = result;
    operator = null;
    num2 = null;
    display = result.toString();
    displayText.textContent = display;
});