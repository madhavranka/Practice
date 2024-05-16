function containsDuplicate(nums: number[]): boolean {
  let mp: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (mp.has(nums[i])) {
      return true;
    } else {
      mp.set(nums[i], 1);
    }
  }
  return false;
}
