const hasChar = (string, char) => {  
  let i = 0;
  while (i < string.length) {    
    if (string[i] === char) {
      return true;
    }     
    i += 1;
  }  
return false;  
}

console.log(hasChar("Hello, World!", "a"));