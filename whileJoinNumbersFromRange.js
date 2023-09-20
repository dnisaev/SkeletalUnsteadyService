const joinNumbersFromRange = (beginNum, endNum) => {

  let string = '';
  let i = beginNum;

  while (i <= endNum) {

    string = `${string}${i}`;
    i += 1;
    
  }

return string;
}

console.log(joinNumbersFromRange(3, 7));