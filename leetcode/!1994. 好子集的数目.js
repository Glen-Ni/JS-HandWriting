/**
  思路：
    用哈希表；
    由于nums[i]<=30 那nums[i]情况就分三种情况
      1. 单个质数 [2,3,5,7,11,13,17,19,23,29]
      2. 两个质数相乘 
            [6, [2, 3]],
            [10, [2, 5]],
            [14, [2, 7]],
            [22, [2, 11]],
            [26, [2, 13]],
            [15, [3, 5]],
            [21, [3, 7]]
      3. 三个质数相乘 [30]
    然后就是排列组合了
      三种情况分三种呗
        n中选k个不同的，不能重复： n！/((n-k)!k!)
    然后由于可以重复，所以要乘上哈希表里面每个元素的个数
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfGoodSubsets = function (nums) {
  const ones = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  const twos = [6, 10, 14, 22, 26, 15, 21];
  const twosMap = new Map([
    [6, [2, 3]],
    [10, [2, 5]],
    [14, [2, 7]],
    [22, [2, 11]],
    [26, [2, 13]],
    [15, [3, 5]],
    [21, [3, 7]],
  ]);
  const mapA = new Map();
  for (let i = 0, len = nums.length; i < len; i++) {
    const ele = nums[i];
    if (ones.indexOf(ele) > -1) {
      if (!mapA.get(ele)) {
        mapA.set(ele, 1);
      } else {
        mapA.set(ele, mapA.get(ele) + 1);
      }
    }
  }
  console.log("map", mapA);

  function factorial(num, total) {
    return num === 1 ? total : factorial(num - 1, num * total);
  }
  /**
   * map中元素排列组合累计
   * @param {*} map
   */
  function combine(map) {
    let count = 0;
    const len = map.size;
    if (len === 1) {
      count = 1;
    } else {
      for (let i = 1; i < len; i++) {
        console.log('len', len, i)
        count += factorial(len, 1) / (factorial(len - i, 1) * factorial(i, 1));
      }
      count ++
    }
    for (let value of map.values()) {
      count *= value;
    }
    return count;
  }
  return combine(mapA);
};

console.log(numberOfGoodSubsets([1, 3, 3, 3, 5]));



function aaa(map) {
  let count = 0;
  for (let i = 1; i < len; i++) {
    
  }
}