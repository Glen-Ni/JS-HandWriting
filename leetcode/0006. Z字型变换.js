/**
 * 思路：
 *  模拟
 *  踩了js生成二维数组的坑，如果直接接fill一个数组，大家会共用一个数组
 *   const map = Array(y).fill().map(()=>new Array(x).fill(0));
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  const dirs = [
    ...Array(numRows - 1).fill([0, 1]),
    ...Array(numRows - 1).fill([1, -1]),
  ];
  let pos = [0, 0];
  let pointer = 0;
  const map = Array(numRows).fill().map(()=>new Array(1).fill());
  map[0][0] = s[0];
  for (let i = 1, len = s.length; i < len; i++) {
    pos = [pos[0] + dirs[pointer][0], pos[1] + dirs[pointer][1]];
    map[pos[1]][pos[0]] = s[i];
    pointer++;
    if (pointer > dirs.length - 1) pointer = 0;
  }
  let str = "";
  for (let i = 0, len = numRows; i < len; i++) {
    map[i].forEach((letter) => {
      if (letter) str += letter;
    });
  }

  return str;
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
