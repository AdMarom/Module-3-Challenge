// Assignment code here


// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// var x = answer;
// var moveOn = (x<128);
// var moveBack = (x>=128);


function Btn(){
  var generateBtn = document.querySelector("#generate");
window.alert ("specify criteria");
let criteria = window.prompt ("How many characters are in your password?");
if (criteria <= 128 && criteria >= 8) {
  window.prompt("Are there upper case letters?");
}
else if (criteria > 128) {
  window.alert("Characters must be less than 128");
}
else if (criteria < 8) {
  window.alert("Characters must be greater than 7");
}

// else if (moveBack) {
//   window.alert ("less than 128");
// }
}




// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);