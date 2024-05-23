function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const solve = (idx: number, curr: number[]) => {
    if (idx === nums.length) {
      result.push(curr);
      return;
    }
    //skip
    solve(idx + 1, [...curr]);
    //take
    solve(idx + 1, [...curr, nums[idx]]);
  };
  solve(0, []);
  return result;
}
