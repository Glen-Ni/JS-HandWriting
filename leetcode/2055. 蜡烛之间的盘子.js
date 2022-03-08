/**
 * 超时，得用前缀和
 * 思路：
 *  要用两个数组
 *    一个存一个点右侧的的一个蜡烛位置x
 *    一个存一个点左侧的第一个蜡烛位置y
 *  再用一个数组，累计盘子数量
 *
 *
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function (s, queries) {
  // const sumArr = new Array(s.length).fill(0)
  const sumArr = [];
  const nextCandleArr = [];
  const previousCandleArr = [];
  let count = 0;
  let previous = 0;
  let next = s.length - 1;
  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] === "*") {
      count++;
    } else {
      previous = i;
    }
    sumArr[i] = count;
    previousCandleArr[i] = previous;
  }
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "|") {
      next = i;
    }
    nextCandleArr[i] = next;
  }
  const res = [];
  for (let i = 0, len = queries.length; i < len; i++) {
    const leftNext = nextCandleArr[queries[i][0]];
    const rightPrevious = previousCandleArr[queries[i][1]];
    // console.log("lN", leftNext);
    // console.log("rP", rightPrevious);
    res[i] =
      leftNext < queries[i][1] && rightPrevious > queries[i][0]
        ? sumArr[rightPrevious] - sumArr[leftNext]
        : 0;
  }
  // console.log(
  //   "sumArr",
  //   sumArr.map((item, index) => ({ key: index, value: item }))
  // );
  // console.log("nextCandleArr", nextCandleArr);
  // console.log("previousCandleArr", previousCandleArr);
  return res;
};
// var platesBetweenCandles = function (s, q~ueries) {
//   const flagArr = new Array(s.length).fill(0);
//   const flagTempArr = [];
//   let flag = false;
//   let len = s.length;
//   for (let j = 1; j < len - 1; j++) {
//     if (s[j] === "|") {
//       flag = false;
//       continue;
//     } else if (s[j - 1] === "|") {
//       flag = true;
//     }
//     if (flag && s[j] === "*") {
//       flagTempArr[j] = 1;
//     }
//   }
//   flag = false;
//   for (let j = len - 2; j > 0; j--) {
//     if (s[j] === "|") {
//       flag = false;
//     } else if (s[j + 1] === "|") {
//       flag = true;
//     }
//     if (flag && s[j] === "*" && flagTempArr[j]) {
//       flagArr[j] = 1;
//     }
//   }
//   const flagStr = flagArr.join("");
//   const result = [];
//   for (let i = 0, len = queries.length; i < len; i++) {
//     const childStr = flagStr.substring(queries[i][0], queries[i][1] + 1);
//     const start = childStr.indexOf(0);
//     const end = childStr.lastIndexOf(0);
//     if (start === end) {
//       result.push(0)
//       continue;
//     }
//     const validArr = [...childStr.substring(start, end)];
//     let count = 0;
//     for (let j = 0, len = validArr.length; j < len; j++) {
//       if (validArr[j] === "1") {
//         count++;
//       }
//     }
//     result.push(count);
//   }

//   return result;
// };

// console.log(
//   platesBetweenCandles("**|**|***|", [
//     [2, 5],
//     [5, 9],
//   ])
// );
console.log(
  platesBetweenCandles("***|**|*****|**||**|*", [
    [1, 17],
    [4, 5],
    [14, 17],
    [5, 11],
    [15, 16],
  ])
);
