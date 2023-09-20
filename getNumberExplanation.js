const getNumberExplanation = (num) => {
  switch (num) {
    case 666:
      return "devil number";
    case 42:
      return "answer for everything";
    case 7:
      return "prime number";
    default:
      return "just a number";
  }
}

let num = 666;
console.log(getNumberExplanation(num));
num = 42;
console.log(getNumberExplanation(num));
num = 7;
console.log(getNumberExplanation(num));
num = 0;
console.log(getNumberExplanation(num));