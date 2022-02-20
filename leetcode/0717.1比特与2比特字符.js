/**
我的思路:
  最后一位是1：false
  len = 2
    10：false
    11：true
  不是，去掉数组里面所有11
    len = 1： true
    len > 2
      倒数第二位是1： false
      倒数第二位是0： true

网友思路：
  1. 只与最后一个元素0的前面的连续1的个数有关系。（其实我想到了，但也需要一些判断）
  2. while计数：遇到一个1，+2；遇到0，+1，看最后是否等于len - 1
  3. 正则把10和11替换为其他，看最后一位是不是0
    function isOneBitCharacter(bits: number[]): boolean {
      return bits.join('').replace(/(1[01])/ig, '2').endsWith('0');
    };
 */

/**
 * @param {number[]} bits
 * @return {boolean} =
 */
var isOneBitCharacter = function (bits) {
  const originlen = bits.length;
  if (bits[originlen - 1] === 1) {
    return false;
  }
  const tempArr = [];
  // 其实就是正则替换不熟才写这么一坨
  for (let i = 0, len = bits.length - 1; i < len; i++) {
    if (bits[i] === 1 && bits[i + 1] === 1) {
      bits[i] = "x";
      bits[i + 1] = "x";
    } else if (bits[i] !== "x") {
      tempArr.push(bits[i]);
    }
  }
  // 记得把最后一位补上去
  tempArr.push(bits[originlen -1]);
  if (tempArr.length === 1) {
    return true;
  }
  if (tempArr[tempArr.length - 2] === 0) {
    return true;
  }
  return false;
};

console.log("expect: true =>" + isOneBitCharacter([1, 0, 0]));
console.log("expect: false =>" + isOneBitCharacter([1, 1, 1, 0]));
console.log("expect: true =>" + isOneBitCharacter([1, 0, 1, 0, 0, 0]));
console.log("expect: true =>" + isOneBitCharacter([1, 0, 1, 1, 0]));
console.log("expect: false =>" + isOneBitCharacter([1, 0, 1, 1, 1, 0]));
