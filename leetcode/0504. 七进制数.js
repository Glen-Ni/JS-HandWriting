/**
 * 似乎也没啥好说的
 * @param {number} num
 * @return {string}
 */
 var convertToBase7 = function(num) {
  const flag = num>=0?'': '-';
  let resultArr = [] ;
  let absNum = Math.abs(num)
  // 有时候执行用时和代码简洁程度不能兼得
  // 比如先判断下面这个执行速度显著就要快（以题目中判例来说）
  // if(absNum<7){
  //   return flag + absNum
  // }
  while(true){
    if(absNum<7){
      resultArr.unshift(absNum)
      break
    }
    resultArr.unshift(absNum % 7)
    absNum = Math.floor(absNum / 7)
  }
  return flag+resultArr.join('')
};

console.log(convertToBase7(100));
console.log(convertToBase7(0));
console.log(convertToBase7(-7));