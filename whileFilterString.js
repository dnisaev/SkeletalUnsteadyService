const filterString = (string, char) => {
  let result = '';
  let i = 0;
  while (i <= string.length - 1) {
    if (string[i] === char) {
      result = result;
    } else {
      result = `${result}${string[i]}`;
    }
    i++
  }
return result;
}

console.log(filterString("Hello, World!", "l"));