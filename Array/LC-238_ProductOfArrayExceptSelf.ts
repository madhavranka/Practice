function productExceptSelf(nums: number[]): number[] {
  let length: number = nums.length;
  let leftProduct: number[] = new Array(nums.length);
  let rightProduct: number[] = new Array(nums.length);
  leftProduct[0] = 1;
  rightProduct[length - 1] = 1;
  for (let i = 1; i < length; i++) {
    leftProduct[i] = leftProduct[i - 1] * nums[i - 1];
  }
  for (let i = length - 2; i > -1; i--) {
    rightProduct[i] = rightProduct[i + 1] * nums[i + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = leftProduct[i] * rightProduct[i];
  }
  return nums;
}
