// Assignment 2 javascript

// Question 1: Add 7 to chosen number
function add7(num) {
    return num + 7;
    
}

console.log(add7(10));
console.log(add7(3));


//Question 2: Take 2 numbers and multiply them

function multiply(a, b) {
    return a * b; 
}

console.log(multiply(10, 9));
console.log(multiply(6, 6));

// Question 3: returns string with first letter capitalized

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalize("HeLLo mY Name iS GrIM"));

// Question 4: Return the last character of a string

function lastLetter(string) {
    return string.slice(-1);

}

console.log(lastLetter("jdshfajksfkafhkss"));