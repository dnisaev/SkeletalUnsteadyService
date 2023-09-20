const even = (string) => {
  let result = '';
  let i = 0;
  while (i <= string.length - 1) {
    if (i % 2 > 0) {
      result = `${result}${string[i]}`
    } 
    i++;
  }
  return result;
}

console.log(even('Hello, World!'));