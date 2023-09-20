const isInternationalPhone = (phone) => {
  
  const firstNum = phone[0];
  
  const checkFirstNum = firstNum === '+';

  return checkFirstNum;
};

const phone1 = '74957017584';
console.log(isInternationalPhone(phone1));

const phone2 = '+74957017584';
console.log(isInternationalPhone(phone2));