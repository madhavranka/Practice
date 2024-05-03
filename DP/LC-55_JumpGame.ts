function canJump(nums: number[]): boolean {
  let dp: boolean[] = new Array(nums.length).fill(false);
  dp[0] = true;
  const helper = (target: number) => {
    if (dp[target]) return true;
    let iter: number = target - 1;
    while (iter > -1 && target - iter > nums[iter]) {
      iter--;
    }
    if (iter === -1) return false;
    dp[target] = helper(iter);
    return dp[target];
  };
  let target: number = nums.length - 1;
  if (target === 0) return true;
  return helper(target);
}
