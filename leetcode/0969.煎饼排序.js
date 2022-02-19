/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
  const kArr = [];
  /**
   * @param {number[]} arr
   * @return {number}
   */
  function maxIndex(arr) {
    let temp = arr[0];
    let index = 0;
    for (let i = 1, len = arr.length; i < len; i++) {
      if (arr[i] > temp) {
        temp = arr[i];
        index = i;
      }
    }
    // console.log(index);
    return index;
  }
  // for (let i = 0, len = arr.length; i < len; i++) {
  //   if (i === 0) {
  //   }
  // }

  // 递归吧 写个方法把最大值翻到最后
  function recursive(arr) {
    if (arr.length === 1) return;
    const maxIdx = maxIndex(arr);
    let transformArr;
    if (maxIdx === 0) {
      kArr.push(arr.length);
      transformArr = arr.reverse();
      console.log("k:" + arr.length, transformArr);
    } else if (maxIdx === arr.length - 1) {
      transformArr = [...arr];
    } else {
      const tempArr = [...arr]
      const left = tempArr.splice(0, maxIdx + 1);
      transformArr = [...left.reverse(), ...tempArr];
      kArr.push(maxIdx + 1);
      console.log("k:" + (maxIdx + 1), transformArr);
      transformArr = transformArr.reverse()
      kArr.push(arr.length);
      console.log("k:" + arr.length, transformArr);
    }
    const unSort = [...transformArr].splice(0, transformArr.length - 1);
    return recursive(unSort);
  }

  recursive(arr);
  return kArr;
  //
};

console.log(pancakeSort([3, 2, 4, 1]));
