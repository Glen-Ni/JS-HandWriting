/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for(let i=0,len = nums.length;i < len;i++) {
    const a = nums[i];
    const b = target - a;
    const leftArr = nums
    leftArr.splice(i,1);
    const indexOfb = leftArr.indexOf(b)
    if(indexOfb > -1) {
      return [i,indexOfb+1 ]
    }
  }
};

console.log(twoSum([2,7,11,15], 9));