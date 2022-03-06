/**
 * 先从头判断符合递减的有哪些，在从后判断符合递增的有哪些
 * 注意点就是
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function (security, time) {
  const answer = [];
  if (security < time * 2 + 1) {
    return answer;
  }
  if (time === 0) {
    let i = 0;
    return new Array(security.length).fill().map(() => i++);
  }

  const arr = [];
  let count = time - 1;
  for (let i = 1, len = security.length; i < len; i++) {
    if (security[i] <= security[i - 1]) {
      count--;
    } else {
      count = time - 1;
    }
    if (count < 0) {
      arr[i] = 1;
    }
  }
  count = time - 1;
  for (let i = security.length - 2; i >= 0; i--) {
    if (security[i] <= security[i + 1]) {
      count--;
    } else {
      count = time - 1;
    }
    if (count < 0 && arr[i] === 1) {
      answer.push(i);
    }
  }
  return answer;
};

console.log(goodDaysToRobBank([5, 3, 3, 3, 5, 6, 2], 2));
console.log(goodDaysToRobBank([1, 1, 1, 1, 1], 0));
console.log(goodDaysToRobBank([1, 2, 3, 4, 5, 6], 2));
console.log(goodDaysToRobBank([1], 5));
