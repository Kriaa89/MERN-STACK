// Problem 1
// Write an arrow function that checks to see if a user is older than 18.
const checkAge = (age) => {
    return age > 18 
    ? "You are good to go!"
    : "Sorry! You must be 18 or older!";
}
console.log(checkAge(20));
console.log(checkAge(17));

// Problem 2
// Write an arrow function that checks to see if it is currently raining.
const checkWeather = (weather) => {
    return weather === "rain"
    ? "Get your rain jacket!"
    : "No rain on today's forecast!";
}
console.log(checkWeather("rain")); 
console.log(checkWeather("sunny"));

// Problem 3
// Write an arrow function that checks to see if a number is even.
const checkEven = (num) => {
    return num % 2 === 0
    ? "That's an even number!"
    : "That's an odd number!";
}
console.log(checkEven(4));
console.log(checkEven(7));

// Problem 4
// Write an arrow function that takes in two parameters and checks whether one number is greater than another.
const checkGreater = (num1, num2) => {
    return num1 > num2
    ? `${num1} is greater than ${num2}!`
    : `${num1} is less than ${num2}!`;
}
console.log(checkGreater(5, 3));
console.log(checkGreater(2, 9));