function lengthOfLIS(nums: number[]): number {
  const dp: number[][] = new Array(nums.length + 1)
    .fill([])
    .map((n: number[]) => new Array(nums.length + 1).fill(-1));
  const solve = (idx: number, prevIndex: number): number => {
    if (idx >= nums.length) {
      return 0;
    }
    if (dp[idx][prevIndex] > -1) {
      return dp[idx][prevIndex];
    }
    let l: number = 0;
    if (prevIndex === -1 || nums[idx] > nums[prevIndex]) {
      //take
      l = 1 + solve(idx + 1, idx);
    }
    //skip
    const r: number = solve(idx + 1, prevIndex);
    dp[idx][prevIndex] = Math.max(l, r);
    return dp[idx][prevIndex];
  };
  return solve(0, -1);
}
