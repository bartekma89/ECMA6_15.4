'use strict';

/*const sayHello = () => console.log('Hello World');
sayHello();

let greeting = 'Hello User!';

function greetWorld(isGreeting) {
	if(isGreeting){
		let greeting = 'Hello World!';
		return greeting;
	}
	return greeting;
}

console.log(greetWorld(true));

for(let i = 0; i < 10; i++) {
	console.log(i);
}

function sayHelloTo(person) {
	console.log(`Hello ${person} nice to meet you`);
};

sayHelloTo('John');*/

var numbers = [1, 2, 3];
//es5
var numberPlusOne = numbers.map(function (x) {
	return x + 1;
});

console.log(numberPlusOne);

//es6

var numberPlusOne1 = numbers.map(function (x) {
	return x + 1;
});
console.log(numberPlusOne1);

//destrukturyzacja

function getCoords() {
	return {
		x: 1,
		y: 2
	};
};

var coords = getCoords();

var x = coords.x,
    y = coords.y;


console.log(x, y);

var names = ['Jan', 'Zosia', 'Zbyszek', 'Kacper', 'Tomek', 'Magda'];

var first = names[0],
    second = names[1],
    thrid = names[2],
    fifth = names[4];


console.log(thrid, fifth);
