const { encrypt } = require('./forEncrypt.js');

const encrypt = (string) => {  
  let result = '';  
  for (let i = 0; i <= string.length; i++) {    
    if (i % 2 === 0) {      
      result = `${result}${string[i + 1] || ''}`;      
    } else if (i % 2 > 0) {      
      result = `${result}${string[i - 1]}`;      
    }
  }
return result;
}

let string = "abcdefg";
console.log(encrypt(string));