//Normal Function
function add1 ( num1: number, num2: number ): number {
    return num1 + num2;
}

//Arrow function
const add2 = ( num1: number, num2: number ): number => num1 + num2;
const doMath = ( x: number, y: number ): number => {
    const sum = x + y;
    const output = sum * 5;
    const result = output + 20;
    return result;
}

const finalValue = doMath( 5, 3 );
console.log( 'Final Value: ', finalValue );