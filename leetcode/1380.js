/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
  var numbers = []
  console.log(matrix)
  function min(arr) {
    var min = arr[0]
    var minIndex = 0
    arr.forEach((element,i) => {
      if(element < min) {
        min = element
        minIndex=i
      }
    });
    return [min,minIndex]
  }
  function isMax(arr, num){
    for (var i=0,len=arr.length;i<len;i++){
      if(arr[i] > num) {
        return false
      }
    }
    return true
  }
  var mins = matrix.map((rowArr) => min(rowArr))
  console.log('mins', mins);
  var reversedMatrix = matrix[0].map((num, colIndex) => {
    return matrix.map((rowArr) => rowArr[colIndex])
  })
  console.log('reversedMatrix',reversedMatrix);
  mins.forEach((ele) => {
    if(isMax(reversedMatrix[ele[1]], ele[0])) {
      numbers.push(ele[0])
    }
  })
  return numbers
};

console.log(luckyNumbers([[36376,85652,21002,4510],[68246,64237,42962,9974],[32768,97721,47338,5841],[55103,18179,79062,46542]]));
// console.log(luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]));
// console.log(luckyNumbers([[7,8],[1,2]]));
