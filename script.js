// Assignment code here


// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");



function Btn(){
  var generateBtn = document.querySelector("#generate");
window.alert ("specify criteria");
if (generateBtn) {
  window.prompt("How many characters are in your password?");
  }

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);