function maxProduct(nums: number[]): number {
  let max: number = -11;
  let prod: number = 1;
  for (let i = 0; i < nums.length; i++) {
    prod *= nums[i];
    max = Math.max(prod, max);
    if (prod === 0) {
      prod = 1;
    }
  }
  prod = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    prod *= nums[i];
    max = Math.max(prod, max);
    if (prod === 0) {
      prod = 1;
    }
  }
  return max;
}
