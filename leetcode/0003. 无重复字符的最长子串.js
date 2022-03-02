/**
 * 思路
 *  遍历动态规划
 *    如果break
 *      看最后几个是不是符合
 *    如果没break
 *      indexOf === -1
 *        max+=
 *      indexOf > -1
 *        break = true
 * 麻烦了
 *  网友思路简单很多，算相同字符间长度，比长度就行
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  let max = s[0];
  let isBreak = false;
  for (let i = 1, len = s.length; i < len; i++) {
    if (isBreak) {
      const str = s.substring(i - max.length, i + 1);
      console.log("str", str);
      if (str === [...new Set([...str])].join("")) {
        max = str;
        isBreak = false;
      }
    } else {
      if (max.indexOf(s[i]) === -1) {
        max += s[i];
      } else {
        isBreak = true;
      }
    }
  }
  return max.length;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
