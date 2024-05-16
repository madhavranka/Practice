function countBits(n: number): number[] {
  let result: number[] = new Array(n + 1);
  for (let i = 0; i < n + 1; i++) {
    let count: number = 0;
    let j = i;
    while (j > 0) {
      if (result[j]) {
        count += result[j];
        break;
      } else {
        count += j & 1;
        j = j >> 1;
      }
    }
    result[i] = count;
  }
  return result;
}
