function maxSubArray(nums: number[]): number {
  let max: number = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] += Math.max(nums[i - 1], 0);
    max = Math.max(nums[i], max);
  }
  return max;
}
