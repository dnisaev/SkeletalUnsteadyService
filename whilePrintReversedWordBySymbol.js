const printReversedWordBySymbol = (string) => {
  let i = string.length - 1;
  while (i >= 0) {
    console.log(string[i]);
    i -= 1;
  }
}

printReversedWordBySymbol('Hello, World!');