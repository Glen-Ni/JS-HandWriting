/**
我的思路是
0. 先去重
1. 先按长度排序
2. 遍历每个，看每个的前置在不在里面
3. 最长长度的几个排序选出字典序
官方差不多，但优化了倒序；正序要记录最长的字符串第一次出现的位置
收获：
  sort用法：return 负数则a在前（所以对于纯数字的数组可以用return a-b进行正序排列）
  string的大于小于比较：看第一个不同的字母那个出现在ASCII表的后面，就大；字符串越长也越大
 */

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  const arr = [...new Set(words)];
  arr.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    } else if (a.length < b.length) {
      return -1;
    }
    // if (a > b) {
    //   return 1;
    // }
    // return -1;
    // 这边改为倒序，就不用记录最长的了
    if (a > b) {
      return -1;
    }
    return 1;
  });
  const arr2 = [];
  let result = "";
  for (let i = 0, len = arr.length; i < len; i++) {
    const item = arr[i];
    if (item.length === 1) {
      arr2.push(item);
      result = item;
    }
    if (arr2.indexOf(item.substring(0, item.length - 1)) !== -1) {
      arr2.push(item);
      result = item;
    }
  }
  console.log(arr2);
  return result;
};

console.log(longestWord(["w", "wo", "wor", "worl", "world"]));
console.log(
  longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"])
);
console.log(
  longestWord([
    "ts",
    "e",
    "x",
    "pbhj",
    "opto",
    "xhigy",
    "erikz",
    "pbh",
    "opt",
    "erikzb",
    "eri",
    "erik",
    "xlye",
    "xhig",
    "optoj",
    "optoje",
    "xly",
    "pb",
    "xhi",
    "x",
    "o",
  ])
);
