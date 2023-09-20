const sumNumbersFromRange = (beginNum, endNum) => {
  let i = beginNum;
  let sum = 0;
  while (i <= endNum) {
    sum += i;
    console.log(`${sum} + ${i}`);
    i += 1;  
  }
return sum;
}
sumNumbersFromRange(1, 5);