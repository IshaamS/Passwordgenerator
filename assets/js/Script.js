// Assignment code here
const specialChars = ")(*&^%$#@!"
const genrateButton = document.getElementById('generateBtn')
genaerateButton.addEventListener('click', writePassword)

// Password to #password input
function writePassword() {
  var password = generatePassword();
  var PasswordText = document.querySelector("#password");

  passwordText.value = password;
}


//Prompt length and confirm characters
function generatePassword() {
  var passwordLen = prompt("How long do you want your password to be?")

  var special = confirm("Would you like to use special characters in your password?")

  var numbers = confirm("Would you like to use numbers in your password?")

  var lowercases = confirm("Would you like to use lowercase letters in your password?")

  var uppercases = confirm("Would you like to use uppercase letters in your password?")

// Minimum count for numbers, lowerCases, upperCases and specialChars
var minimumCount = 0;

// Empty minimums for numbers, lowerCases, specialCharacters and upperCases

var minimumNumbers = "";
var minimumLowercases = "";
var minimumUppercases = "";
var minimumSpecialChars = "";

// Generator functions**
var functionArray = {
  getNumbers: function() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  },

  getLowerCases: function() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  },

  getUpperCases: function() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  },

  getSpecialChars: function() {
    return specialChars[Math.floor(Math.random() * specialChars.length)]
  }

  
};

// Check that option is selected

if(numbers === true) {
  minimumNumbers = functionArray.getNumbers();
  minimumCount++;

}

if(lowerCases === true) {
  minimumLowercases = functionArray.getLowerCase();
  minimumCount++;

}

if(upperCases === true) {
  minimumUpperCases = functionArray.getUpperCases();
  minimumCount++;

}

if(special === true) {
  minimumSpecialCharacters = functionArray.getSpecialCharacters();
  minimumCount++;

}

// Empty loop variable
var randomPasswordGenerated = "";

// Random Characters
for (let i= 0; i < (parseInt(passwordLength)- minimumCount); i++) {
  var randomNumberPicked = Math.floor(Math.random() * 4);

  randomPasswordGenerated += randomNumberPicked;

}

//Add to password
randomPasswordGenerated += minimumNumbers;
randomPasswordGenerated += minimumLowercases;
randomPasswordGenerated += minimumUpperCases;
randomPasswordGenerated += minimumSpecialCharacters;


return randomPasswordGenerated;
}