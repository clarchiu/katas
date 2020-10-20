function camelCase (string) {
  let toReturn = '';
  string.split(' ').forEach((word) => {
    toReturn += (word[0].toUpperCase() + word.slice(1));
  })
  return toReturn[0].toLowerCase() + toReturn.slice(1);
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));