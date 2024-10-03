function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log("solution1", reverseString("the universal string problem"));
// melborp gnirts lasrevinu eht

//solution2-
function StringReversal(str) {
  let revStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }

  return revStr;
}

console.log("solution2", StringReversal("the universal string problem"));
//melborp gnirts lasrevinu eht
