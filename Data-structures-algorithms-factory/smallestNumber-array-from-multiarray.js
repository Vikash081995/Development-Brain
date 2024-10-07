const multiArray = [
  [123, 2, 34],
  [1234, 4, 5, 55],
];

function SmallesTarray(arr) {
  let singleArray = [];
  for (const elem of arr) {
    singleArray.push(Math.min(...elem));
  }
  return singleArray;
}

console.log("Multi", SmallesTarray(multiArray));
//[2,4]