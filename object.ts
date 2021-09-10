const city: string = 'Dhaka';
const fruits: string[] = [ 'Mango', 'Banana', 'Orange' ];
const employee: { name: string, id: number, salary: number } = {
    name: 'Sami Meadad Choudhury',
    id: 101,
    salary: 4500
};

console.log( employee.name );

type Student = {
    name: string,
    age: number,
    mark: number
};

const student: Student = {
    name: 'Arishamma',
    age: 1,
    mark: 100
};

console.log( student.name );