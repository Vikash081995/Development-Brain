//factorial of a num n = n*(n-1)!
//eg:  factorial of 4 = 4*3*2*1=24

function fact(num) {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
}

console.log("factorial", fact(4));
// /factorial 24