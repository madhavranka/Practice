import { TreeNode } from "./LC-104_MaximumDepthOfBinaryTree";

function maxPathSum(root: TreeNode | null): number {
  let maxPath: number = -Infinity;
  const recursion = (root: TreeNode | null) => {
    if (!root) {
      return 0;
    }
    const rootVal: number = root.val;
    let valueToBeReturned: number = 0; //max of either root or root+left or root+right

    let l: number = recursion(root.left);
    let r: number = recursion(root.right);

    let c1: number = rootVal + l + r;
    let c2: number = rootVal + l;
    let c3: number = rootVal + r;

    valueToBeReturned = Math.max(c2, c3, rootVal);
    maxPath = Math.max(maxPath, valueToBeReturned, c1);
    return valueToBeReturned;
  };
  recursion(root);
  return maxPath;
}
