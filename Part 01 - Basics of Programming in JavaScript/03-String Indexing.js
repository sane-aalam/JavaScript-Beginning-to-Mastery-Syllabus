let userFullName = "ElectroalORS";
console.log(userFullName);
console.log(userFullName[1]);
console.log(userFullName[userFullName.length - 1])
let generateRandomNumber10 = Math.floor(Math.random() * 10);
console.log(userFullName[userFullName.length - generateRandomNumber10 == 0?1: generateRandomNumber10])

// To generate the random number using MathObject
let mathValue = Math.floor(Math.random() * 10 );
console.log(mathValue)

let totalSizeString = userFullName.length;
console.log(totalSizeString);

// Write Program to traversal the string using For Loop
console.log("NewLineStart------------------------")
for(let i = 0; i<totalSizeString; i++){
    console.log(userFullName[i]);
}