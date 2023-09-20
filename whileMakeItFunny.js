const makeItFunny = (str, num) => {

  let i = 0;
  let result = '';
    
  while (i < str.length) {
    
    if ((i + 1) % num < 1) {      
      result = `${result}${str[i].toUpperCase()}`;
    } else {
      result = `${result}${str[i]}`;
    }
    
  i += 1;

  }
  
return result;

};

str = "I did it god damn";
num = 5;
console.log(makeItFunny(str, num));