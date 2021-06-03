
import { add, subtract, multiply, divide, } from '../calculations.js';

const test = QUnit.test;

// name your test by what it is testing
test('adds two numbers', (expect) => {
    const expected = 5;

    const actual = add(2, 3); 

    expect.equal(actual, expected);
});

test('subtracts two numbers', (expect) => {
    const expected = 2;

    const actual = subtract(7, 5); 

    expect.equal(actual, expected);
});

test('multiplies two numbers', (expect) => {
    const expected = 10;

    const actual = multiply(2, 5); 

    expect.equal(actual, expected);
});

test('divides two numbers', (expect) => {
    const expected = 3;

    const actual = divide(33, 11); 

    expect.equal(actual, expected);
});
