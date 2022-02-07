/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const uniqueArr = [];
  const repeatedArr = [];
  nums.forEach((i) => {
    if (repeatedArr.indexOf(i) > -1) {
      return;
    }
    const indexOfI = uniqueArr.indexOf(i);
    if (indexOfI === -1) {
      uniqueArr.push(i);
    } else {
      repeatedArr.push(i);
      uniqueArr.splice(indexOfI, 1);
    }
  });
  if(uniqueArr.length === 0) {
    return 0
  }
  return uniqueArr.reduce((prev, cur) => prev + cur,0);
};


// console.log(sumOfUnique([1,2,3,2]))

var sumOfUnique2 = function (nums) {
  const obj = {}
  nums.forEach((i) => {
    if(obj[i] === undefined) {
      obj[i] = 0
    } else {
      obj[i] ++
    }
  })
  console.log(obj);
  return Object.keys(obj).reduce((a,b) => {
    if(obj[b] === 0) {
      return a + Number(b)
    } else {
      return a
    }
  }, 0)
};


console.log(sumOfUnique2([1,2,3,2]))