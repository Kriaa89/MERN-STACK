// Problem 1
// Why did the code produce that output? If applicable, how would you get the index value that did not output?
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)  
console.log(otherRandomCar) 
// Tesla because randomCar is assigned to the first element in the array
// Mercedes because otherRandomCar is assigned to the second element in the array because of the comma so he skip the first element


// Problem 2
// Why did the code produce that output? If applicable, what would you need to do to solve any potential problems?
const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName);
console.log(employeeName);

// Elon because otherName is assigned to the value of employeeName
// employeeName is not defined 

// Problem 3
// Why did the code produce that output? If applicable, how would you alter this code without changing either console.log?

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
// 12345 
// undefined because password is not a key in the object person


// Problem 4
// Why did the code produce that output? Declare a new variable for the value at the 4th index of the array and console.log it.

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first === second);
console.log(first === third);
//  False because first is assigned to the second elment in the array 
// True because third is assined to the third element in the array


// Problem 5
// Why did the code produce that output? Console.log the last value in the secondKey property's array.

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
// value 
// [1, 5, 1, 8, 3, 3]
// 1 
// 5 


// Problem 6
// First, how many scopes does the following code block contain? Define each scope and guess what the output will be.

var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
        var name = names[index];
    console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
    }
    actuallyPrintingNames();
}
printNames(beatles);
// Paul was found at index 0  

// name and index after loop is Ringo : 4


// Problem 7
// Why did the code produce that output?

function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
        let name = names[index];
        console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
}     
// The code will output an error because the variable name and index are not defined in the global scope

// Problem 8
// Why did the code produce that output? Explain the output, including any possible errors and why they occurred. If there are no errors, explain the justification for each keyword used to declare variables.

const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
        for (let index = 0; index < names.length; index++) {
        const name = names[index];
        console.log(name + ' was found at index ' + index);
    }
    }
    actuallyPrintingNames();
}
printNames(beatles);
// Paul was found at index 0 
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3 


// Problem 9
// Why did the code produce that output? Explain why each console.log looks the way it does.

const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
            composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) 
console.log(planet === planetCopy)
// True because the first element in the composition array is the same in both objects
// False because planet and PlanetCopy are different objects
