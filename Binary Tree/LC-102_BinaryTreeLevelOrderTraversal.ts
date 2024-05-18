import { TreeNode } from "./LC-104_MaximumDepthOfBinaryTree";

function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  let level: number = 0;
  const queue: (TreeNode | null)[] = [];
  queue.push(root);
  while (queue.length > 0) {
    let size: number = queue.length;
    while (size--) {
      const pop: TreeNode | null = queue.shift() ?? null;
      if (pop) {
        if (!result[level]) {
          result[level] = [];
        }
        result[level].push(pop.val);
        queue.push(pop.left);
        queue.push(pop.right);
      }
    }
    level++;
  }
  return result;
}
