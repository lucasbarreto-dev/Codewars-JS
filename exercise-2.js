// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// return masked string
function maskify(cc) {
  const characters = cc.split('');
  
  for (let i = 0; i < characters.length - 3; i += 1) {
    characters[i] = '#'
  }
  return characters.join('');
}


// RASCUNHO:

// for(let i = 0; i < str.split('').length - 4; i += 1) {
//   str.split('')[i]
// }

// SOLUÇÃO ALTERNATIVA (ainda não testado):

// const maskify = (cc) => {
//   const CHARACTERS = cc.split('');
//   const MASK = '#';
//   const MASKED_CHARACTERS = CHARACTERS.map((character) => character === MASK);

//   return MASKED_CHARACTERS.join('');
// }