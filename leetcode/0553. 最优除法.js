/**
 * 思路：
 *  怀疑人生
 *  由于数字都是正数，明显把第一个后面的数全都括起来能使分母最小啊
 *  去你吗动态规划
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function (nums) {
  const [numerator, ...rest] = nums;
  if(nums.length === 1) {
    return '' + numerator;
  } else if(nums.length ===2) {
    return `${nums[0]}/${nums[1]}`
  } 
  return `${numerator}/(${rest.join("/")})`;
};

console.log(optimalDivision([1000, 100, 10, 2]));
console.log(optimalDivision([2]));
