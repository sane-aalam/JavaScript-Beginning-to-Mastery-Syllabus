
let firstFruit = "Apple";
let secondFruit = "Mango";
let thridFruit = "Banana";
let FourthFruit = "Orange";
let FiveFrutit = "Grape";

// console.log(firstFruit,secondFruit,thridFruit,FourthFruit,FiveFrutit);

// Apple
// Banana
// Orange
// Strawberry
// Mango
// Pineapple
// Watermelon
// Grape
// Kiwi
// Peach

// Think About, you have 100+ Fruits List Name
// Then you have to create 100+ Variable, Too Hard
// Array, make our developer life easy
// Array - collection of items
// items can be int,string,char,boolean,object,etc

// Access Array Element using IndexValue
// we can learn + simple understandable

let fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Strawberry",
    "Mango",
    "Pineapple",
    "Watermelon",
    "Grape",
    "Kiwi",
    "Peach"
];


// index start (0 - n-1)
// console.log(fruits)
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[5]);
// console.log(fruits[9]);
// console.log(fruits[fruits.length - 2])

let random_index = Math.floor(Math.random() * 10);
let random_fruit_selector = fruits[random_index];
console.log(random_fruit_selector);
