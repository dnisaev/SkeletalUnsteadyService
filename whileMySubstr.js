const mySubstr = (string, number) => {

  let i = 0;
  let result = "";

  while (i < number) {

    result = `${result}${string[i]}`;
    i += 1;
  }
return result;
};

let string = "Hello, World!"; 
console.log(mySubstr(string, 10));