function getSum(a: number, b: number): number {
  while (b !== 0) {
    let carry: number = a & b;
    let tempSum: number = a ^ b;
    a = tempSum;
    b = carry << 1;
  }
  return a;
}
