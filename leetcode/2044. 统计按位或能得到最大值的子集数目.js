/**
 * 直接抄答案，学一下位运算
 *   https://www.runoob.com/w3cnote/bit-operation.html
 * 看了好久看懂，写些注释吧
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
  let maxOr = 0,
    cnt = 0;
  // 1 << nums.length 指 2的nums.length次方，
  // 每个元素都有可选可不选两种状态，而且子集不能为空，所以有(2的nums.length次方)-1种可能性
  for (let i = 0; i < 1 << nums.length; i++) {
    let orVal = 0;
    // 循环里的i的每一位都表示对当前位数的nums的索引取值与否，1取值，0不取
    for (let j = 0; j < nums.length; j++) {
      // 判断二进制数i的第j位是否为1，进行累按位或
      if (((i >> j) & 1) === 1) {
        orVal |= nums[j];
      }
    }
    if (orVal > maxOr) {
      maxOr = orVal;
      cnt = 1;
    } else if (orVal === maxOr) {
      cnt++;
    }
  }
  return cnt;
};
