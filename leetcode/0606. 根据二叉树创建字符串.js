/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null                                                                                                                                                                                          mmmmmmmmmmm  mmmmmmglj   : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var tree2str = function (root) {
  console.log("aa~~", root, root && root.right);
  console.log("left~~", root && root.left);
  console.log("right~~", root && root.right);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  if (root === null) return null;
  const left = tree2str(root.left);
  const right = tree2str(root.right);
  if (left === null && right === null) {
    return root.value;
  }
  return `${root.value}${left ? "(" + left + ")" : "()"}${
    right ? "(" + right + ")" : ""
  }`;
};

const node = (value, left, right) => {
  return {
    value: value === undefined ? 0 : value,
    left: left === undefined ? null : left,
    right: right === undefined ? null : right,
  };
};

// const binaryTree = node(
//   "A",
//   node("B", node("D"), undefined),
//   node("C", node("E", undefined, node("G")), node("F", node("H"), node("J")))
// );

const binaryTree = node("1", node("2", node("4")), node("3"));

console.log(tree2str(binaryTree));
