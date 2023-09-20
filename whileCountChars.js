const countChars = (string, char) => {

  let i = 0;
  let sum = 0;

  while (i < string.length) {
    if (string[i].toLowerCase() === char.toLowerCase()) {
    sum += 1;  
    }
    i += 1;
  }
return sum;
}

const string = "Hello, World!";
let char = "L";
console.log(countChars(string, char));
char = "G";
console.log(char);