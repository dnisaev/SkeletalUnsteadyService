const capitalize = (string) => {

  const firstCharUpper = string.slice(0, 1).toUpperCase();

  const stringWithOutFirstChar = string.slice(1, string.length);
  
  return firstCharUpper + stringWithOutFirstChar;
};

let string = "hello, World!";

console.log(capitalize(string));