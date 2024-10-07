//----------------------------------------------------------------
//SOLUTION1-split, reverse and join method in javascript
//--------------------------------------------------------------------------
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log("solution1", reverseString("the universal string problem"));
// melborp gnirts lasrevinu eht

//----------------------------------------------------------------
//SOLUTION2-TRADITIONAL FOR LOOP
//--------------------------------------------------------------------------
function StringReversal(str) {
  let revStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }

  return revStr;
}

console.log("solution2", StringReversal("the universal string problem"));
//melborp gnirts lasrevinu eht
//-------------------------------------------------------------------------------
//SOLUTION#+++FOR OF LOOP
//-------------------------------------------------------------------------------
function reversed(str) {
  let reversedStr = "";
  for (let character of str) {
    reversedStr = character + reversedStr;
  }
  return reversedStr;
}

console.log("reveresed", reversed("hello"));
// olleh
