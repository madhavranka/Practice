function hammingWeight(n: number): number {
  let count: number = 0;
  function helper(n: number) {
    let start: number = 0;
    let end: number = 32;
    let pow: number = 0;
    while (start < end) {
      const mid: number = Math.floor(start + (end - start) / 2);
      const pow: number = Math.pow(2, mid);
      if (pow > n) {
        end = mid - 1;
      } else if (pow < n) {
        start = mid + 1;
      } else {
        count++;
        return count;
      }
    }
    count++;
    pow = Math.pow(2, start);
    if (pow > n) {
      n = n % Math.pow(2, start - 1);
      helper(n);
    } else if (pow < n) {
      n -= pow;
      helper(n);
    }
    return count;
  }
  // return helper(n);
  while (n > 0) {
    if (n & 1) {
      count += 1;
    }
    n = n >> 1;
  }
  return count;
}
