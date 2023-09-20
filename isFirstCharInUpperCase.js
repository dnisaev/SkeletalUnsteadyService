const isFirstCharUpper = (word) => {
  
  const firstChar = word[0];
  const firstCharUpper = firstChar.toUpperCase();
  
  const checkFirstCharUpper = firstCharUpper === firstChar;
  return checkFirstCharUpper;
}

const word1 = 'hello, World!';
console.log(isFirstCharUpper(word1));

const word2 = 'Hello, World!';
console.log(isFirstCharUpper(word2));