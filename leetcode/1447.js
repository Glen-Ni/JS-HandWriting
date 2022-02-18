/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
  const result = [];
  for (let i = 1, len = n; i <= len; i++) {
    for (let j = 1; j < i; j++) {
      if (gcd(i, j) === 1) {
        result.push(j + "/" + i);
      }
    }
  }
  function gcd(a, b) {
    // if (a % b === 0) return b;
    // 写成下面的可以减少计算
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }
  return result;
};

console.log(simplifiedFractions(4));
