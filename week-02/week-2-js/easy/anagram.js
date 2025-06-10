/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

/*
In this approach, I first split the strings into arrays. Then, I sort the characters in each array alphabetically from A to Z. 
After that, I join the sorted characters back into strings. If the resulting strings match, they are anagrams; otherwise, they are not.
*/

function isAnagram(str1, str2) {
  let tracker = true;

  if (str1.length != str2.length) {
    return false;
  }

  if (str1.split("").sort().join("") == str2.split("").sort().join("")) {
    return true;
  } else {
    return false;
  }
}

let result = isAnagram("spar", "rasp");
console.log(result);

module.exports = isAnagram;
