const isStrongPassword = (password) => {

  const lengthPassword = password.length;

  const checkLengthPassword = lengthPassword >= 8 && lengthPassword <= 20;

  return checkLengthPassword;
  
};

const password1 = 'abcdefgh';
console.log(password1);

const password2 = 'ABCDEFG';
console.log(password2);

const password3 = 'aBcDeFgHiJKlMnOp0123';
console.log(password3);

const password4 = 'aBcDeFgHiJKlMnOp012345';
console.log(password4);