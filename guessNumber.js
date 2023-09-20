const guessNumber = (num) => {

  if (num === 42) {
    return 'You win!';
  } else {
    return 'Try again!';
  }
}

console.log(guessNumber(42));