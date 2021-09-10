"use strict";
//Normal Function
function add1(num1, num2) {
    return num1 + num2;
}
//Arrow function
const add2 = (num1, num2) => num1 + num2;
const doMath = (x, y) => {
    const sum = x + y;
    const output = sum * 5;
    const result = output + 20;
    return result;
};
const finalValue = doMath(5, 3);
console.log('Final Value: ', finalValue);
