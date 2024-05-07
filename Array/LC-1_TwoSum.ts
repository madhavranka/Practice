function twoSum(nums: number[], target: number): number[] {
  let mp = {};
  for (let i = 0; i < nums.length; i++) {
    if (mp[nums[i].toString()] !== undefined) {
      return [mp[nums[i].toString()], i];
    } else {
      mp[target - nums[i]] = i;
    }
  }
  return [];
}
