// import functions
import { add } from './calculations.js';

// reference needed DOM elements
const addxInput = document.getElementById('add-x-input');
const addyInput = document.getElementById('add-y-input');
const addButton = document.getElementById('add-btn');
const addResult = document.getElementById('add-result');


// set event listeners 
addButton.addEventListener('click', () => {
    const x = Number(addxInput.value);
    const y = Number(addyInput.value);

    const sum = add(x, y);

    addResult.textContent = sum;

});
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
