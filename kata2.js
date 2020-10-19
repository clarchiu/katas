function conditionalSum (nums, condition) {
  let sum = 0;
  let numToCheck = -1;

  switch (condition) {
    case 'odd': numToCheck = 1; break;
    case 'even': numToCheck = 0; break;
    default: return sum;
  }

  nums.forEach((num) => {
    if (num % 2 === numToCheck) {
      sum += num;
    }
  })

  return sum;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
