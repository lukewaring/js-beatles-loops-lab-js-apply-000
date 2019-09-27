function theBeatlesPlay(musicians, instruments) {
  let array = [];
  
  for (let i = 0; i < musicians.length; i += 1) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return array;
}

// function johnLennonFacts(facts) {
//   let array = [];
  
//   for (let i = 0; i < facts.length; i += 1) {
//     array.push(`${facts[i]}!!!`);
//   }
  
//   return array;
// }

function johnLennonFacts(facts) {
  let array = [];
  let i = 0;
  
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`);
    i += 1;
  }
  
  return array;
}

function iLoveTheBeatles(i) {
  let array = [];
  
  do {
    array.push('I love the Beatles!');
    i += 1;
  } while (i < 15);
  
  return array;
}
