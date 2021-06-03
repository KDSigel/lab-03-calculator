// import functions
import { add, subtract, multiply, divide } from './calculations.js';

// reference needed DOM elements
const addxInput = document.getElementById('add-x-input');
const addyInput = document.getElementById('add-y-input');
const addButton = document.getElementById('add-btn');
const addResult = document.getElementById('add-result');

const subxInput = document.getElementById('sub-x-input');
const subyInput = document.getElementById('sub-y-input');
const subButton = document.getElementById('sub-btn');
const subResult = document.getElementById('sub-result');

const multxInput = document.getElementById('mult-x-input');
const multyInput = document.getElementById('mult-y-input');
const multButton = document.getElementById('mult-btn');
const multResult = document.getElementById('mult-result');

const divxInput = document.getElementById('div-x-input');
const divyInput = document.getElementById('div-y-input');
const divButton = document.getElementById('div-btn');
const divResult = document.getElementById('div-result');


// set event listeners 
addButton.addEventListener('click', () => {
    const x = Number(addxInput.value);
    const y = Number(addyInput.value);

    const sum = add(x, y);

    addResult.textContent = sum;

});

subButton.addEventListener('click', () => {
    const x = Number(subxInput.value);
    const y = Number(subyInput.value);

    const sum = subtract(x, y);

    subResult.textContent = sum;
});

multButton.addEventListener('click', () => {
    const x = Number(multxInput.value);
    const y = Number(multyInput.value);

    const sum = multiply(x, y);

    multResult.textContent = sum;
});

divButton.addEventListener('click', () => {
    const x = Number(divxInput.value);
    const y = Number(divyInput.value);

    const sum = divide(x, y);

    divResult.textContent = sum;
});


