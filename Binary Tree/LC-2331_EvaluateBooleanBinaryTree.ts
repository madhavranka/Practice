import { TreeNode } from "./LC-104_MaximumDepthOfBinaryTree";

function evaluateTree(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  if (root.val === 0 || root.val === 1) {
    return root.val === 1;
  }
  const l1: boolean = evaluateTree(root.left);
  const l2: boolean = evaluateTree(root.right);

  return root.val === 2 ? l1 || l2 : l1 && l2;
}
