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

// Button Event Listeners
numButtons.forEach(element => {
    element.addEventListener("click", function (e)
    {
        let buttonNumber = e.target.textContent;
        display += buttonNumber;
        displayText.textContent = display;
    });
});

operatorButtons.forEach(element => {
    element.addEventListener("click", function (e)
    {
        let buttonOperator = e.target.textContent;
        num1 = parseInt(display);
        operator = buttonOperator;
        display = "";
    });
});

clearButton.addEventListener("click", () =>
{
    num1 = null;
    num2 = null;
    operator = null;
    display = "";
    
    displayText.textContent = display;
});

equalsButton.addEventListener("click", () =>
{
    // TODO: error catching
    num2 = parseInt(display);
    let result = operate(operator, num1, num2);
    num1 = result;
    operator = null;
    num2 = null;

    display = result.toString();
    displayText.textContent = display;
});