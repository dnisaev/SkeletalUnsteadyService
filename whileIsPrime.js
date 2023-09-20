const isPrime = (number) => {

  if (number < 2) {
    return false;
  }

  let divider = 2;

  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }
return true;
}

let number = 10;
console.log(isPrime(number));
number = 2;
console.log(isPrime(number));
number = 3;
console.log(isPrime(number));
number = 4;
console.log(isPrime(number));