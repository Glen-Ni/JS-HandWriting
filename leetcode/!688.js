// 没做出来 我需要先学下动态规划
// /**
//  * @param {number} n
//  * @param {number} k
//  * @param {number} row
//  * @param {number} column
//  * @return {number}
//  */
// var knightProbability = function (n, k, row, column) {
//   var directions = [
//     [1, 2],
//     [2, 1],
//     [1, -2],
//     [2, -1],
//     [-1, 2],
//     [-2, 1],
//     [-1, -2],
//     [-2, -1],
//   ];
//   var fail = 0;
//   /**
//    * @param {number} x
//    * @param {number} y
//    * @param {number} step
//    */
//   function recursive(x, y, step) {
//     if (step > k) return;
//     directions.forEach((i) => {
//       var newX = x + i[0];
//       var newY = y + i[1];
//       // console.log("new", newX, newY);
//       if (newX < n && newY < n && newX >= 0 && newY >= 0) {
//         return recursive(newX, newY, step + 1);
//       } else {
//         fail += 1 / Math.pow(8, step);
//         console.log("fail", fail);
//       }
//     });
//   }
//   recursive(row, column, 1);
//   return 1 - fail;
// };

// console.log(knightProbability(3, 2, 0, 0));

/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
  var directions = [
    [1, 2],
    [2, 1],
    [1, -2],
    [2, -1],
    [-1, 2],
    [-2, 1],
    [-1, -2],
    [-2, -1],
  ];
  var fail = 0;

  // 算出每个点的下一步的出轨概率
  var cache = [];

  /**
   * 给棋盘标数字，获取当前格的序号，从0开始
   * @param {number} x
   * @param {number} y
   */
  function getIndex(x, y) {
    return y * n + x;
  }

  for (let i = 0, len1 = n; i < len1; i++) {
    for (let j = 0, len2 = n; j < len2; j++) {
      let failAddUp = 0;
      // directions.forEach((i) => {
      //   var newX = x + i[0];
      //   var newY = y + i[1];
      //   // console.log("new", newX, newY);
      //   if (newX < n && newY < n && newX >= 0 && newY >= 0) {
      //   } else {
      //     fail += 1 / Math.pow(8, step);
      //     console.log("fail", fail);
      //   }
      // });
      // 试一下forEach 和 for loop的性能差别
      for (let k = 0; k < 8; k++) {
        const newX = i + directions[k][0];
        const newY = j + directions[k][1];
        if (!(newX < n && newY < n && newX >= 0 && newY >= 0)) {
          // console.log("fail", failAddUp);
          failAddUp += 0.125;
        }
      }
      cache[getIndex(i, j)] = [, failAddUp];
    }
  }
  console.log(cache);
  // {
  //   index: 0,
  //   left: 0,
  //   fail: x,
  // }
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} leftStep
   */
  function recursive(x, y, leftStep) {
    let fail = 0;
    if (leftStep === 0) return 0;
    directions.forEach((i) => {
      var newX = x + i[0];
      var newY = y + i[1];
      // console.log("new", newX, newY);
      if (newX < n && newY < n && newX >= 0 && newY >= 0) {
        fail += (1 / Math.pow(8, k - leftStep + 1)) * memorize(recursive)(newX, newY, leftStep - 1);
      } else {
        fail += 1 / Math.pow(8, k - leftStep + 1);
      }
    });
    return fail;
  }
  function memorize(fn) {
    return (x, y, step) => {
      if (cache[getIndex(x, y)][step] === undefined) {
        cache[getIndex(x, y)][step] = recursive(x, y, step);
      }
      console.log("~~~~~~", step, cache);
      return cache[getIndex(x, y)][step];
    };
  }
  memorize(recursive)(row, column, k);
  console.log(cache);
  return 1 - memorize(recursive)(row, column, k);
};

console.log(knightProbability(3, 3, 0, 0));
// console.log(knightProbability(8, 30, 6, 4));
