/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  if (
    edges[1].indexOf(edges[0][0]) > -1 &&
    edges[1].indexOf(edges[0][1]) === -1
  ) {
    return edges[0][0];
  }
  return edges[0][1];
};

console.log(
  findCenter([
    [1, 2],
    [5, 1],
    [1, 3],
    [1, 4],
  ])
);
console.log(
  findCenter([
    [1, 2],
    [2, 3],
    [4, 2],
  ])
);
