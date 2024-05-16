function reverseBits(n: number): number {
  let ans: number = 0;
  let iter: number = 32;
  while (iter > 0) {
    ans <<= 1;
    ans |= n & 1;
    n >>>= 1;
    iter--;
  }
  return ans >>> 0;
}
