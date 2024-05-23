function maximumValueSum(nums: number[], k: number, edges: number[][]): number {
  let sum: number = 0;
  let minLoss: number = Infinity;
  let countOfNumXord: number = 0;
  for (let i = 0; i < nums.length; i++) {
    const xord: number = nums[i] ^ k;
    if (xord > nums[i]) {
      sum += xord;
      countOfNumXord++;
    } else {
      sum += nums[i];
    }
    minLoss = Math.min(minLoss, Math.abs(xord - nums[i]));
  }
  if (countOfNumXord % 2 === 0) {
    return sum;
  }
  return sum - minLoss;
}
