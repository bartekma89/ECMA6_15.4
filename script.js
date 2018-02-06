//zad. 1

const hello = 'Hello';
const world = 'World!';

const greeting = `${hello} ${world}`;
console.log(greeting);

//zad. 2

const multiply = (a, b = 1) => a * b;
console.log(multiply(4, 3));
console.log(multiply(4));
console.log(multiply(4, 0));
console.log(multiply(3, -1));
console.log(multiply(0, 0));

//zad. 3

const average = (...numbers) => {

    let sum = numbers.reduce((prevVal, val) => { 
    	return prevVal + val; 
    });

    return sum / numbers.length;
}

console.log(average(1, 2, 3, 4));

//zad 4.

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

//zad 5.

const arr = [1, 4, 'Iwona', false, 'Nowak'];

let [, , firstName, , lastName] = arr;

console.log(firstName, lastName);