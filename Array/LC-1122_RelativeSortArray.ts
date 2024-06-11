function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const mp: Map<number, number> = new Map();
  for (let i = 0; i < arr2.length; i++) {
    const num: number = arr2[i];
    mp.set(num, i);
  }
  return arr1.sort(
    (a: number, b: number) => (mp.get(a) ?? 1001 + a) - (mp.get(b) ?? 1001 + b)
  );
}
