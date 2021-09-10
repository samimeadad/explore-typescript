/* let money = 5000;
money = 'My Name is Sami';
money = false;
console.log( money ); */

let myMoney: number = 5000;
let myName: string = 'Sami Meadad Choudhury';
let isMarried: boolean = true;

function add ( first: number, second: number ): number {
    const result: number = first + second;
    return result;
}

/* function add ( first: number | string, second: number | string ): number | string {
    const result: any = first + second;
    return result;
}
This is not a good practice. string cannot be + in this way.
*/


const output: ( number | string ) = add( 34, 43 );
// const fullName: number | string = add( 'Sami ', 'Meadad' );
// console.log( fullName );
console.log( 'Sum: ', output );