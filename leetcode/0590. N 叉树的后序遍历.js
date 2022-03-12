/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
  const traverse = (node,res) =>{
    if(node === null) {
      return
    }
    for (const i of node.children){
      traverse(i,res)
    }
    res.push(node.val)
  }

  const res = []
  traverse(root,res)
  return res;
};