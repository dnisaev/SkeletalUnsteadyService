const getHiddenCard = (card, stars) => { 

  let lengthString = card.length;

  let visiblePart = card.slice(stars, lengthString);

  let hiddenPart = ('*').repeat(stars);

  result = hiddenPart + visiblePart;
  
  return result;

};

let card = "5536913768866530";
let stars = 12;

console.log(getHiddenCard(card, stars));