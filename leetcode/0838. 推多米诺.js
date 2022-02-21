/**
 * 昨天题目用到了正则，今天就用上了
 * 注意 '.'需要转义
 */

/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  let last;
  let current = dominoes;
  while (last !== current) {
    last = current;
    current = last
      .replace(/(R\.L)/g, "RXL")
      .replace(/(R\.)/g, "RR")
      .replace(/(\.L)/g, "LL");
  }
  return current.replace(/X/g, ".");
};

console.log(pushDominoes(".L.R...LR..L.."));
