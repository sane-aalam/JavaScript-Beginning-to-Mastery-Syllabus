
//* Null,Undefined,BigInt,typeof 

// What is the difference between null and undefined? In JavaScript, undefined is a primitive value that represents the absence of any value, while null is another primitive value that represents the intentional absence of any value

let absenceInteger = null;
console.log(absenceInteger);
let intentionalInteger;
console.log(intentionalInteger)

// someCase- we want to assign Value, we can assign(noIssue)
// intentionalInteger = 481101;
// console.log(intentionalInteger)

// absenceInteger = 101;
// console.log(absenceInteger)

// TypeChecker 
// null -> object (bug of javascript)(but good bug)
// undefined -> undefined

console.log(typeof absenceInteger); 
console.log(typeof intentionalInteger)




