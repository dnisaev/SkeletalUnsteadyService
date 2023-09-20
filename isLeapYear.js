const isLeapYear = (year) => {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
};

console.log(isLeapYear(2000));
console.log(isLeapYear(2001));
console.log(isLeapYear(2004));
console.log(isLeapYear(2020));
console.log(isLeapYear(2021));
console.log(isLeapYear(2022));
console.log(isLeapYear(2023));
console.log(isLeapYear(2024));