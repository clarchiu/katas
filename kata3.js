const numberOfVowels = function(data) {
  let vowels = /^[aeiou]$/i;
  let sum = 0;
  for (let char of data) {
    sum += vowels.test(char) ? 1 : 0;
  }
  return sum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));