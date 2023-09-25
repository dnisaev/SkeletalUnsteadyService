const convertText = (string) => {
  if (string === "") {
    return "";
  } else if (string[0] === string[0].toUpperCase()) {
    return string;
  } else {
    return string.length;
  }
}

//

// const convertText = (str) => { 
//   return str === '' ? '' : str[0] === str[0].toUpperCase() ? str : str.length;
// }

//

let string = 'Hello, World!';
let string2 = 'hello, World!';

console.log(convertText(string));
console.log(convertText(string2));
console.log(convertText(''));
console.log(string2[0].toUpperCase());