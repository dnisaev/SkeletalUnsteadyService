const text = 'When \t\n you play a \t\n game of thrones you win or you die.';

const sliceText = text.slice(5, 15);
const trimSliceText = sliceText.trim();
const lengthTrimSliceText = trimSliceText.length;

console.log(lengthTrimSliceText);