const truncate = (text, length) => {

  return text.slice(0, length) + '...';

};

console.log(truncate("Hello, World!", 2));