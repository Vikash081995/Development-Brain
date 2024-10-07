// /A palindrome is a word, phrase, number, or sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization. For example:

// Words: "madam", "racecar", "level"
// Phrases: "A man, a plan, a canal, Panama!"
// Numbers: 121, 1221

// problem:Palindrome("abba")===true
// ====================================================================================
//solution 1
function isPalindrome(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev === str ? true : false;
}

console.log("isPalindrome", isPalindrome("abba"));
//=======================================================================================
//every method in javascript
function palindrome(str) {
  return str.split("").every((char, i) => {
    console.log(i, str.length - i - 1);
    return char === str[str.length - i - 1];
  });
}

console.log("isP", palindrome("abba"));
