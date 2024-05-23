function subsetXORSum(nums: number[]): number {
  const solve = (idx: number, xor: number): number => {
    if (idx === nums.length) {
      return xor;
    }
    const skip: number = solve(idx + 1, xor);
    const take: number = solve(idx + 1, xor ^ nums[idx]);
    return skip + take;
  };
  return solve(0, 0);
}
