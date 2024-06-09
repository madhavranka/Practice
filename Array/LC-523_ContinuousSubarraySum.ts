function checkSubarraySum(nums: number[], k: number): boolean {
  if (nums.length < 2) return false;
  // const dp: boolean[][] = new Array(nums.length).fill([]).map((arr) => new Array(nums.length));
  // const solve = (start: number, idx: number, sum: number): boolean => {
  //     if(dp[start][idx] !== undefined){
  //         return dp[start][idx];
  //     }
  //     if(sum % k === 0){
  //         return true;
  //     }
  //     if(idx >= nums.length){
  //         return false;
  //     }
  //     sum += nums[idx];
  //     dp[start][idx] = solve(start, idx+1, sum) || solve(start+1, idx+1, sum - nums[start]);
  //     return dp[start][idx];
  // }
  // return solve(0, 2, nums[0] + nums[1]);

  const mp: Map<number, number> = new Map();
  let sum: number = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const rem: number = sum % k;
    if (mp.has(rem)) {
      if (i - mp.get(rem) >= 2) {
        return true;
      }
    } else {
      let idxToSet: number = i;
      if (rem === 0) {
        idxToSet = -1;
        if (i + 1 >= 2) {
          return true;
        }
      }
      mp.set(rem, idxToSet);
    }
  }
  return false;
}
