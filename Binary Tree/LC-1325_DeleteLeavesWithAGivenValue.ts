import { TreeNode } from "./LC-104_MaximumDepthOfBinaryTree";
function removeLeafNodes(
  root: TreeNode | null,
  target: number
): TreeNode | null {
  if (!root) {
    return null;
  }
  let temp = root;
  temp.left = removeLeafNodes(temp.left, target);
  temp.right = removeLeafNodes(temp.right, target);

  if (!temp.left && !temp.right && temp.val === target) {
    return null;
  }
  return root;
}
