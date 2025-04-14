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
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            throw new Error();
    }
}

let num1 = null;
let num2 = null;
let operator = null;
let display = "";

// Fetch DOM Elements
const displayText = document.querySelector("#display");
const clearButton = document.querySelector("#clearButton");
const numButtons = document.querySelectorAll(".numButton");

// Button Event Listeners
numButtons.forEach(element => {
    element.addEventListener("click", function (e)
    {
        let buttonNumber = e.target.textContent;
        if(display.length >= 4)
        {
            alert("Maximum size for display reached");
        }
        else
        {
            display += buttonNumber;
            displayText.textContent = display;
        }
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

