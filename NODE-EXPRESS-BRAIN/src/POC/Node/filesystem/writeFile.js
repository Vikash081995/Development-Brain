const fs= require('fs');

fs.writeFile("data.txt", "hello world!", (err) => {
  if (err) {
    throw err;
  }
  console.log("It is saved ");
});
