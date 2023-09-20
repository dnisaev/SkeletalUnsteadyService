const reverse = (string) => {

  let i = 0;
  let result = '';

  while (i < string.length) {

    result = `${string[i]}${result}`;
    i += 1;
  }

return result;
}

console.log(reverse("Hello, World!"));