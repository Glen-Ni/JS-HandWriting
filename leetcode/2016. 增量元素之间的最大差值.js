/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  const len = nums.length;
  let max = -1;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      max = nums[j] - nums[i] > max ? nums[j] - nums[i] : max;
    }
  }
  return max > 0 ? max : -1;
};

console.log(maximumDifference([7, 1, 5, 4]));
console.log(maximumDifference([9, 4, 3, 2]));
console.log(maximumDifference([1, 5, 2, 10]));
