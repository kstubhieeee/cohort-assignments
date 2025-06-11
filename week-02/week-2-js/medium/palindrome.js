/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let string = str.toLowerCase();
  let newString = "";
  for (i = string.length - 1; i >= 0; i--) {
    newString = newString + string[i];
  }
  if (string == newString) {
    return true;
  } else {
    return false;
  }
}

let boolean = isPalindrome("noon");
console.log(boolean);

module.exports = isPalindrome;
