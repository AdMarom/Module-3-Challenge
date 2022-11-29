// Assignment code here

//creates function to start prompts for user to answer

const numbersPicked = "0123456789";
const upperCasePicked = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCasePicked = "abcdefghijklmnopqrstuvwxyz";
const charactersPicked = "!@#$%^&";

var userOptions = "";
var password = "";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Function activated when generate button is clicked
function Btn() {  

var characterLength = window.prompt("How many characters are in your password?");

if (!characterLength) {
    return;
}
if (characterLength <= 128 && characterLength >=8) {
    userOptions = userOptions + characterLength;
}

else if (characterLength > 128) {
    window.alert("Characters must be less than 128")
    return;
}

else if (characterLength < 8){
    window.alert("Characters must be greater than 7")
    return;
}

const shouldNumbers = confirm("Are there numbers in your password?");
if (shouldNumbers===true){
    userOptions = userOptions + numbersPicked;
}

const shouldUpperCase = confirm("Are there upper case letters in your password?");
if (shouldUpperCase===true){
    userOptions = userOptions + upperCasePicked;
}

const shouldLowerCase = confirm("Are there lower case letters in your password?");
if (shouldLowerCase===true){
    userOptions = userOptions + lowerCasePicked;
}

const shouldCharacters = confirm("Are there characters in your password?");
if (shouldCharacters===true){
    userOptions = userOptions + charactersPicked;
}

if (!shouldNumbers && !shouldUpperCase && !shouldLowerCase && !shouldCharacters) {
    alert("Should have atleast 1 character type.");
    Btn();

}

//for loop
    for(var i=0; i<characterLength; i++) {
    var answer = Math.floor(Math.random()*userOptions.length);
    password = password + userOptions[answer];}
    console.log(password);

}

// Write password to the #password input
function writePassword() {
    var passwordText = document.querySelector("#password");
    passwordText.value = password

}




