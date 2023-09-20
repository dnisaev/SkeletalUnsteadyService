const getLetter = (string, number) => {
  
  return string[number - 1] || '';
  
};

const string = "Hello";
const number = 0;

console.log(getLetter(string, number));