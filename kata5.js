const urlEncode = function(text) {
  // Put your solution here
  //return encodeURIComponent(text.trim());
  let toReturn = "";
  for (let char of text.trim()) {
    toReturn += char === " " ? "%20" : char;
  }
  return toReturn
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));