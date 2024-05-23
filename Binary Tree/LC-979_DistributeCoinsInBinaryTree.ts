import { TreeNode } from "./LC-104_MaximumDepthOfBinaryTree";

function distributeCoins(root: TreeNode | null): number {
  let moves: number = 0;
  const helper = (root: TreeNode | null): number => {
    if (!root) {
      return 0;
    }
    const l: number = helper(root.left);
    const r: number = helper(root.right);
    moves += Math.abs(l) + Math.abs(r);
    return root.val + l + r - 1;
  };
  helper(root);
  return moves;
}
