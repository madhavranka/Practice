function subarraysDivByK(nums: number[], k: number): number {
  const mp: Map<number, number> = new Map();
  mp.set(0, 1);
  let sum: number = 0;
  let count: number = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let rem: number = sum % k;
    if (rem < 0) {
      rem += k;
    }
    if (mp.has(rem)) {
      count += mp.get(rem);
    }
    mp.set(rem, (mp.get(rem) ?? 0) + 1);
  }
  return count;
}
