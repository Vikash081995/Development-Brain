// Question

// ---

// **question1-Write a function TitleCapitalize which  can take any string as an argument and return only the first letter of each word in the string capitalized.**

// **eg : input sting —- “hello world let me think”**

// **o/p- “Hello World Let Me Think”**

// **question2-Write a second function sentenceCappitalize which takes any string as an argument and return only the first letter of the first word in the string capitalized.**

// i/p- ‘it is a Sunny Wednesday moRning right now’

// o/p- ‘It is a sunny wednesday morning right now’
function titleCapitalize(str) {
  str = str.toLowerCase().split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    console.log(str);
  }
  return str.join(" ");
}

console.log("Exercise Solution ", titleCapitalize("the fuTure is nOw"));
function sentenceCapitalize(str) {
  return str && str[0].toUpperCase() + str.slice(1);
}
console.log("Exercise Solution2 ", sentenceCapitalize("the future is now"));
