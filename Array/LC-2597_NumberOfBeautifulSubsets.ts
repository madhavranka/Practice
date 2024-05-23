function beautifulSubsets(nums: number[], k: number): number {
  let result: number = 0;
  const mp: Map<number, number> = new Map();
  const solve = (idx: number) => {
    if (idx >= nums.length) {
      result++;
      return;
    }
    const val: number = nums[idx];
    if ((mp.get(val - k) ?? 0) <= 0 && (mp.get(val + k) ?? 0) <= 0) {
      mp.set(val, (mp.get(val) ?? 0) + 1);
      //take
      solve(idx + 1);
      mp.set(val, mp?.get(val) - 1);
    }
    solve(idx + 1);
  };
  solve(0);
  return result - 1;
}
