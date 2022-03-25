/**
  迭代先算出来然后再统计尾随0不可行，很容易就阶乘到maxnumber
  算5的个数即可
*/
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  //
  // if (n === 0) return 0;
  // const fn = (num, result) => {
  //   return num === 1 ? result : fn(num - 1, num * result);
  // };
  // const arr = fn(n, 1).toString().split("");
  // console.log(arr);
  // let count = 0;
  // for (let i = arr.length - 1; i > 0; i--) {
  //   if (arr[i] === "0") {
  //     count++;
  //   } else {
  //     break;
  //   }
  // }
  let count = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
};

console.log(trailingZeroes(30));
