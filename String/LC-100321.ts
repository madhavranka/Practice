function numberOfPairs(nums1: number[], nums2: number[], k: number): number {
  const nums2Mp: Map<number, number> = new Map();
  nums2.forEach((num: number) => {
    nums2Mp.set(num, (nums2Mp.get(num) ?? 0) + 1);
  });
  let countOfPairs: number = 0;
  for (let i = 0; i < nums1.length; i++) {
    const num: number = nums1[i] / k;
    if (Math.floor(num) == num) {
      let div: number = 1;
      while (div * div <= num) {
        // numToCheck = num / div;
        if (num % div === 0) {
          if (nums2Mp.has(div)) {
            countOfPairs += nums2Mp.get(div);
          }
          if (div != num / div) {
            countOfPairs += nums2Mp.has(num / div) ? nums2Mp.get(num / div) : 0;
          }
        }
        div++;
      }
    }
  }
  return countOfPairs;
}
