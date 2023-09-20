const isPalindrome = (string) => {
  return string.toLowerCase() === reverse(string.toLowerCase());
}

const isNotPalindrome = (string) => {
  return !isPalindrome(string);
}

console.log(isPalindrome('anna'));
console.log(isNotPalindrome('anna'));