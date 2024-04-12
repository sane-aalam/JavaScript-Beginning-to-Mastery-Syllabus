let userName = "Aditya VerMa";
let userAge = 23;
let userCity = "Rampur";
let userPinCode = 19191;
let UserDetails = "BTechCSE'MERNSTack"

console.log(userName);
console.log(userAge);
console.log(userCity);
console.log(userPinCode);
console.log(UserDetails);

// Let's Concate all the things 

// using space Empty(Extra spacing we are using )
let addSpace = " ";
let FullDetails = userName + addSpace +  userAge + addSpace + userCity + addSpace + userPinCode + addSpace + UserDetails;
console.log(FullDetails)

// using Template String 
// 1- Easy to use
// 2- remove extra spacing 
// 3- similear to JSX
// 4- short + clear 

let FullDetailsGoodWay = `
${userName} ${userAge} ${userCity} ${userPinCode} ${UserDetails}`;
console.log(FullDetailsGoodWay)