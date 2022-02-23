/**
  官方解题用得双指针，没有本质区别吧，但循环次数少了一半
  学到了：
    1. /^[a-zA-Z]+$/.test(str)
    2. const arr = [...s] 等价于 const arr = s.split('')
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const arr = s.split("");
  const letterArr = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    // if (letters.indexOf(arr[i]) > -1) {
    if (/[a-zA-Z]/.test(arr[i])) {
      letterArr.push(arr[i]);
      arr[i] = undefined;
    }
  }
  letterArr.reverse();
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === undefined) [(arr[i] = letterArr.shift())];
  }
  return arr.join("");
};


console.log(reverseOnlyLetters('ab-cd'));
console.log(reverseOnlyLetters('a-bC-dEf-ghIj'));
console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!'));