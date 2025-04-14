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

let num1 = 0;
let num2 = 0;
let operator = '';
let display = "";

const displayText = document.querySelector("#display");
const numButtons = document.querySelectorAll(".numButton");

numButtons.forEach(element => {
    element.addEventListener("click", function (e)
    {
        let buttonNumber = e.target.textContent;
        if(display.length >= 8)
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