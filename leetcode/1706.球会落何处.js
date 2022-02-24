/**
 * 思路：
 *  就循环判断呗
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  const w = grid[0].length;
  const h = grid.length;
  function getExit(x, y) {
    while (true) {
      if (grid[y][x] === 1) {
        if (x + 1 === w) {
          // 碰壁
          return -1;
        }
        if (grid[y][x + 1] === -1) {
          // 走不通
          return -1;
        }
        x++;
      }
      if (grid[y][x] === -1) {
        if (x - 1 < 0) {
          // 碰壁
          return -1;
        }
        if (grid[y][x - 1] === 1) {
          // 走不通
          return -1;
        }
        x--;
      }
      if (y === h - 1) {
        return x;
      }
      y++;
    }
  }
  return grid[0].map((i, index) => getExit(index, 0));
};

console.log(
  findBall([
    [1, 1, 1, -1, -1],
    [1, 1, 1, -1, -1],
    [-1, -1, -1, 1, 1],
    [1, 1, 1, 1, -1],
    [-1, -1, -1, -1, -1],
  ])
);
console.log(findBall([[-1]]));
console.log(
  findBall([
    [1, 1, 1, 1, 1, 1],
    [-1, -1, -1, -1, -1, -1],
    [1, 1, 1, 1, 1, 1],
    [-1, -1, -1, -1, -1, -1],
  ])
);
