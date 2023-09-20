const reverseString = (string) => {

  let result = '';

  for (let i = 0; i < string.length; i += 1) {

    result = `${string[i]}${result}`;
  }

return result;
}

string = 'Hello, World!';
console.log(reverseString(string));