interface Player {
    name: string,
    club: string,
    salary: number,
    country: string,
    nationality: string
    isMarried: boolean,
    wife?: string,
    previousClubs?: string[]
};

const ronaldo: Player = {
    name: 'Christiano Ronaldo',
    club: 'ManU',
    salary: 10000,
    country: 'England',
    nationality: 'Portugal',
    isMarried: false,
    wife: 'Irina',
    previousClubs: [ 'Sporting Lisbon', 'Manchester United', 'Real Madrid', 'Juventus' ]

};

console.log( ronaldo );

interface Employee {
    name: string,
    id: number,
    dept: string,
    salary: number,
    age: number
};

interface Programmer extends Employee {
    language: string[],
    frameworks: string[],
    projects?: string[]
}

const sami: Programmer = {
    name: 'Sami Meadad Choudhury',
    id: 101,
    dept: 'Web Development',
    salary: 25000,
    age: 40,
    language: [ 'c', 'c++', 'JavaScript', 'php', 'YAML', 'ansible', 'html', 'css', 'bash-scripting' ],
    frameworks: [ 'bootstrap', 'tailwind', 'reactJS', 'angular', 'nodejs' ]
}

console.log( sami );