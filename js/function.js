"use strict";
/* let money = 5000;
money = 'My Name is Sami';
money = false;
console.log( money ); */
let myMoney = 5000;
let myName = 'Sami Meadad Choudhury';
let isMarried = true;
function add(first, second) {
    const result = first + second;
    return result;
}
/* function add ( first: number | string, second: number | string ): number | string {
    const result: any = first + second;
    return result;
}
This is not a good practice. string cannot be + in this way.
*/
const output = add(34, 43);
// const fullName: number | string = add( 'Sami ', 'Meadad' );
// console.log( fullName );
console.log('Sum: ', output);
