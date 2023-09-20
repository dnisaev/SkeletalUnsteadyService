const getHalfString = (string) => {

  let result = '';

  for (let i = 0; i < string.length / 2; i += 1) {

    result += string[i];
  }
  
return result;
}

let string = 'Hello, World!';
console.log(getHalfString(string));