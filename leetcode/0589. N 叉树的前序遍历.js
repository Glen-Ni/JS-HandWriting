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
 var preorder = function(root) {
  const traverse = (node,res) =>{
    if(node === null) {
      return
    }
    res.push(node.val)
    for (const i of node.children){
      traverse(i,res)
    }
  }

  const res = []
  traverse(root,res)
  return res;
};