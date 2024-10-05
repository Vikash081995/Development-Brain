function longestWord(str) {
  let splitStr = str.split(" ");
  let long = 0;
  let word = "";

  for (let i = 0; i <= splitStr[i].length; i++) {
    if (splitStr[i].length && long < splitStr[i].length) {
      long = splitStr[i].length;
      word = splitStr[i];
    }
  }

  return word;
}

console.log(
  "lonestword",
  longestWord("If you get this right we will hire you")
);
//============================================================================
//solution2
//=====================================================================
function LongestWord(string1) {
  let str = string1.split(" ");
  let long = 0;
  let word = "";

  str.forEach((st) => {
    if (long < st.length) {
      long = st.length;
      word = st;
    }
  });
  return word;
}

console.log(
  "longestWord",
  LongestWord("Hello i am working on Data structures ")
);
