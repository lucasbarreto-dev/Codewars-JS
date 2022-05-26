// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
  const phrase = str
  .split('')
  .filter((letter) => letter !== 'a' && letter !== 'A' && letter !== 'e' && letter !== 'E' && letter !== 'i' && letter !== 'I' && letter !== 'o' && letter !== 'O' && letter !== 'u' && letter !== 'U')
  .join('');
  return phrase;
};

// RASCUNHOS

  // // DEFINIR AS VOGAIS 
  // let lowerCaseVowels = [ 'a', 'e', 'i', 'o', 'u' ];
  // let upperCaseVowels = lowerCaseVowels.map((vowel) => vowel.toUpperCase());

  // // ATRIBUIR O MODO DE ANÁLISE INSENSITIVE CASE
  // for (let i = 0; i < lowerCaseVowels.length; i += 1) {
  //   lowerCaseVowels[i].toLowerCase() = upperCaseVowels[i].toLowerCase(); 
  // }


// str.toLowerCase().split('').filter((letter) => letter !== 'a' && letter !== 'e' && letter !== 'i' && letter !== 'o' && letter !== 'u');
// // ['t', 'h', 's', ' ', 'w', 'b', 's', 't', ' ', 's', ' ', 'f', 'r', ' ', 'l', 's', 'r', 's', ' ', 'l', 'l', '!']

// // SEPARAR AS LETRAS DE CADA PALAVRA DENTRO DE ARRAYS
// str.split(' ').map((word) => word.split(''));
// // [['T', 'h', 'i', 's'], ['w', 'e', 'b', 's', 'i', 't', 'e'], ['i', 's'], ['f', 'o', 'r'], ['l', 'o', 's', 'e', 'r', 's'], ['L', 'O', 'L', '!']]


// str.split(' ').map((word) => word.split('')).map((word) => word.join('')); 
// // ['This', 'website', 'is', 'for', 'losers', 'LOL!']

// BEST SOLUTION:

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}