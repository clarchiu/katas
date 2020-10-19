function sumLargestNumbers(nums) {
  let lastIndex = nums.length - 1;
  insertionSort(nums);
  return nums[lastIndex] + nums[lastIndex - 1];
}

function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let j = i;
    while (j >= 0 && nums[j-1] > nums[j]) {
      let temp = nums[j];
      nums[j] = nums[j-1];
      nums[j-1] = temp;
      j--;
    }
  }
}

