/**
  leetcode1994用到了状压dp，完全不会，先学学普通dp
 */

/**
 * 从 (0, 0) 到 (M, N)移动, 只能往右往下，多少种路径
 * @param {*} m
 * @param {*} n
 */
function route(m, n) {
  // 思路
  // fn(m,n) = fn(m-1,n) + fn(m,n-1)
  // 倒推
  const table = [];
  for (let i = 0; i < m; i++) {
    table[i] = [];
    for (let j = 0; j < n; j++) {
      table[i][j] = 1;
    }
  }
  console.log(table);
  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      table[i][j] = table[i + 1][j] + table[i][j + 1];
    }
  }
  console.log(table);
  return table[0][0];
}

console.log(route(4, 5));


for(let i = 0,len=arr.length;i<len;i++){}
