/**
 * 一开始用数组和前序遍历，效率不高
 * 然后用set，效率显著提高
 *    然后测了三次中序和前序，发现似乎前序更快一点
 * /
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */

var findTarget = function (root, k) {
  const set = new Set();
  
  let flag = false;
  const traverse = (node) => {
    if (node === null) return;
    if (!set.has(node.val)) {
      set.add(k - node.val);
      traverse(node.left);
      traverse(node.right);
    } else {
      flag = true;
    }
  };
  traverse(root)
  console.log(set);
  return flag;
};

// var findTarget = function (root, k) {
//   const arr = [];
//   let flag = false;
//   const traverse = (node) => {
//     if (node === null) return;
//     if (arr.indexOf(node.val) === -1) {
//       arr.push(k - node.val);
//       traverse(node.left);
//       traverse(node.right);
//     } else {
//       flag = true;
//     }
//   };
//   traverse(root)
//   console.log(arr);
//   return flag;
// };


const node = (value, left, right) => {
  return {
    val: value === undefined ? 0 : value,
    left: left === undefined ? null : left,
    right: right === undefined ? null : right,
  };
};
const binaryTree = node(5, node(3, node(2),node(4)), node(6,null,node(7)));


console.log(findTarget(binaryTree,9))
console.log(findTarget(binaryTree,28))
console.log(findTarget(binaryTree,8))
console.log(findTarget(binaryTree,13))
console.log(findTarget(binaryTree,14))