// Question

// ---

// eg : ‘hello’ repeat 4 times = “hellohellohellohello’;

// Write a function repeatString which takes tow arguments, a string and a number and return a new string repeating the first string as many times as the number argument specifies.function repeatString(str, num) {
// =============================================
function repeatString(str, num) {
  let rstring = "";

  for (let i = 0; i <= num - 1; i++) {
    rstring += str;
  }
  return rstring;
}

console.log("repeate 4 times ", repeatString("hello", 4));
//=====================================================================
//solution2
function repeatString2(str, num) {
  return str.repeat(num);
}

console.log("repeate 4 times ", repeatString2("hello", 4));
//==============================================================================
//solution-3
function repeatString3(str, num) {
  let newArr = [];
  for (let i = 0; i < num; i++) {
    newArr.push(str);
  }

  return newArr.join("");
}

console.log("repeate 4 times ", repeatString3("hello", 4));
