const getTypeOfSentence1 = (string) => {
  const lastChar = string[string.length - 1];
  let stringType;
  if (lastChar === "?") {
    stringType = 'question';
  } else if (lastChar === "!"){
    stringType = 'exclamation';
  } else {
    stringType = 'normal';
  }
  return `Sentence is ${stringType}`
}

let string = 'Hello, World?';
console.log(getTypeOfSentence1(string))

const getTypeOfSentence2 = (string) => {
  let stringType;
  if (string.endsWith('?')) {
    stringType = 'Question';
  } else {
    stringType = 'Normal';
  }
  return `${stringType} sentence`;
}

string = 'Hello, World';
console.log(getTypeOfSentence2(string));