// /*************  ✨ Codeium Command 🌟  *************/
/**
 * Truncates a given string to a given length, appending "..." if the string is
 * longer than the desired length.
 * @param {string} str - The string to truncate.
 * @param {number} num - The desired length of the string.
 * @returns {string} The truncated string.
 */
// /******  d2d722d0-8a2f-42ff-a45e-104ae68fe917  *******/
function truncate(str, num) {
  // If the string is longer than the desired length, truncate it and append
  // "..." to indicate that there is more.
  if (str.length >= num) {
    // Use slice to extract the first num characters of the string.
    return str.slice(0, num) + "....";
  }
  // If the string is shorter than the desired length, just return it as is.
  return str;
}

console.log(truncate("Exercise solution", 4));
console.log(truncate("Hey this is really important you'll pay to read", 21));
