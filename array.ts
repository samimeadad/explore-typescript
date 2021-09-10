const salary: number = 7500;
const friendSalary: number[] = [ 7500, 12300, 17200, 9400, 8300 ];
console.log( salary );
console.log( friendSalary );

friendSalary[ 0 ] = 10500;
console.log( friendSalary );

friendSalary.push( 15300 );
console.log( friendSalary );

//friendSalary.push('this is a name') ====> cannot possible. friendSalary is a number type array.

/* let max = 0;
for ( const salary of friendSalary ) {
    if ( salary > max ) {
        max = salary;
    }
}
console.log( max ); */

function findMax ( salaries: number[] ): number {
    let max: number = 0;
    for ( const salary of salaries ) {
        if ( salary > max ) {
            max = salary;
        }
    }
    return max;
}

const max: number = findMax( friendSalary );
console.log( 'Maximum Salary: ', max );