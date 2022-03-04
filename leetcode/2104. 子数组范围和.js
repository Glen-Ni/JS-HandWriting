/**
 * 思路
 *  还是官方思路来得方便
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
  let sum = 0
  for(let i = 0,len=nums.length;i<len;i++){
    let min = Number.MAX_VALUE
    let max = -Number.MAX_VALUE
    for (let j = i; j < len; j++) {
      min = Math.min(min, nums[j]);
      max = Math.max(max, nums[j]);
      sum += max - min;
  }
  }
  return sum;
};

console.log(subArrayRanges([4,-2,-3,4,1]))
console.log(subArrayRanges([1,3,3]))
console.log(subArrayRanges([1,2,3]))