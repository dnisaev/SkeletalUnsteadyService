const printNumbers = (lastNumber) => {
  let i = 1;
  while (i <= lastNumber) {    
    console.log(i);
    i = i + 1;    
  }
  console.log("finished!");
}
printNumbers(10);

const printNumbersReverse = (num) => {
  let i = num;
  while (i >= 0) {
    console.log(i);
    i -= 1;    
  };
  console.log("finished!");  
}
printNumbersReverse(5);