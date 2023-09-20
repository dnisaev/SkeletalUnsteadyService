const repeatString = (string, times) => {
  
  let result = "";
  let i = 1;

  while (i <= times) {
    
    result = `${result}${string}`;
    console.log(result);
    i += 1;
    
  }

return result;
  
}

let string = "Hello!";

console.log(repeatString(string, 3));