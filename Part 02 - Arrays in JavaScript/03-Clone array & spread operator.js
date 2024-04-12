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

let newfruits = [
    "Pineapple",
    "NormalApple"
]

// Spread Operator
let collectionFruits = [...fruits,...newfruits];
console.log(collectionFruits)