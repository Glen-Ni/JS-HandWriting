/**
 * 别忘写break就行
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const scores = [];
  for (let i = 0, len = ops.length; i < len; i++) {
    const len2 = scores.length;
    switch (ops[i]) {
      case "+":
        scores[len2] = scores[len2 - 1] + scores[len2 - 2];
        break;
      case "C":
        scores.pop();
        break;
      case "D":
        scores[len2] = scores[len2 - 1] * 2;
        break;
      default:
        scores[len2] = Number(ops[i]);
        break;
    }
  }
  let total = 0;
  for (let i = 0, len = scores.length; i < len; i++) {
    total += scores[i];
  }
  return total;
};


console.log(calPoints(["5","2","C","D","+"]));
console.log(calPoints(["5","-2","4","C","D","9","+","+"]));