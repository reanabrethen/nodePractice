// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

let userFirstName = getInput(1)
let userLastName = getInput(2)

console.log("Hello, " + userFirstName + " " + userLastName) 
console.log("This is your name capitalized " + userFirstName.toUpperCase() + " " + userLastName.toUpperCase())
console.log("These are your initials " + userFirstName[0] + ". " + userLastName[0] + ".")
console.log("Your email address is " + userFirstName[0].toLowerCase() + userLastName.toLowerCase() + ".prsvr@gmail.com")

 
 
 
 // + " " + userLastName, age)
// getInput(2).toLowerCase()