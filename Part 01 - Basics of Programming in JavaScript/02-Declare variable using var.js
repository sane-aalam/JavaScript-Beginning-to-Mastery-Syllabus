first_name = "Babel javascript";
console.log(first_name);

// Global scope variable 
var second_name = "Babel React";
console.log(second_name);

// Block scope variable with let + const
let middle_name = "Babel Node";
console.log(middle_name);

const fixed_number = 11;
console.log(fixed_number)

// TypeError: Assignment to constant variable.
// you can not re-assign a variable using const keyword,
// if you have declare once
// also you con not define a variable with help of
fixed_number = 14;
console.log(fixed_number)
