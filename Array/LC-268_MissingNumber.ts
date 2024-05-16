function missingNumber(nums: number[]): number {
  let length: number = nums.length;
  let arraySum: number = 0;
  for (let i = 0; i < length; i++) {
    arraySum += i + 1 - nums[i];
  }
  return arraySum;
}
//can be solved using bitwise ops by taking XOR
