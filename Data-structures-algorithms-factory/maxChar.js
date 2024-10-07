/**
 * Given a string, returns the character that occurs the most in the string.
 *
 * We use an object to keep track of the number of times each character appears
 * in the string. We loop over the string and for each character, we check if it
 * is already in the object. If it is, we increment its value in the object by 1.
 * If it is not, we add it to the object with a value of 1.
 *
 * We then loop over the object and find the character with the highest value. We
 * keep track of the character with the highest value and return it at the end.
 *
 * @param {string} str - The string to be processed.
 * @returns {string} The character that occurs the most in the string.
 */
function maxChar(str) {
  // Create an empty object to keep track of the number of times each character appears
  const charObj = {};
  // Initialize max to 0 and maxChar to an empty string
  let max = 0;
  let maxChar = "";
  // Loop over the string
  for (let char of str) {
    // Check if the character is already in the object
    if (charObj[char]) {
      // If it is, increment its value in the object by 1
      charObj[char]++;
    } else {
      // If it is not, add it to the object with a value of 1
      charObj[char] = 1;
    }
  }
  // Loop over the object and find the character with the highest value
  for (let char in charObj) {
    // Check if the value of the character is greater than the current max
    if (charObj[char] > max) {
      // If it is, update max and maxChar
      max = charObj[char];
      maxChar = char;
    }
  }
  // Return the character with the highest value
  return maxChar;
}

console.log(maxChar("hello world"));
