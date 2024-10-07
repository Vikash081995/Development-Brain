// Question

// ---

// Given an integer, return an integer that is reverse ordering of the number

// eg:

// reverseInt(15)===51
//================================
//solution1
//===================================

function reverseInt(num) {
  const reversed = num.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(num);
}

console.log("Reverse integer", reverseInt(25));
//--------------------------------------------
//solution2
function reverseInt(num) {
  let arr = Array.from(num.toString());
  let revArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  console.log("revArr", revArr.join(""));
  return Number(revArr.join(""));
}
console.log("Reverse integer", reverseInt(25));
