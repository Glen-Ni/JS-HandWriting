/**
 * 思路：
 *  没啥好说的 学正则，match、matchAll、replace用法
 *  官方用的str.split('+')，大差不差
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function(num1, num2) {

  function getNums(num) {
    const temp = [...num.matchAll(/^(\-?[0-9]+)\+(\-?[0-9]+)i$/g)][0];
    return [Number(temp[1]),Number(temp[2])]
  }
  const a = getNums(num1)
  const b = getNums(num2)
  const shi = a[0] * b[0] - a[1] * b[1]
  const xu = a[1] * b[0] + a[0] * b[1]
  return `${shi}+${xu}i`
};


console.log(complexNumberMultiply("78+-76i","-86+72i"));
console.log(complexNumberMultiply("1+-1i","1+-1i"));