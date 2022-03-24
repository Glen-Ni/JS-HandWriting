/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  const res = new Array(img.length)
    .fill()
    .map(() => new Array(img[0].length).fill(0));
  const vector = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 0],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  for (let i = 0, len = img.length; i < len; i++) {
    for (let j = 0, len2 = img[0].length; j < len2; j++) {
      let count = 0;
      res[i][j] =Math.floor(
        vector.reduce((prev, now) => {
          if (i + now[0] === -1 || i + now[0] === img.length || j + now[1] === -1 || j + now[1] === img[0].length) {
            return prev;
          }
          count++;
          return (prev += img[i + now[0]][j + now[1]]);
        }, 0)/count) ;
    }
  }
  return res;
};

console.log(
  imageSmoother([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
    [1, 0, 1],
  ])
);
console.log(
  imageSmoother([
    [100, 200, 100],
    [200, 50, 200],
    [100, 200, 100],
  ])
);
