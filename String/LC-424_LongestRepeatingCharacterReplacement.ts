function characterReplacement(s: string, K: number): number {
  let count = {};
  let sArr: string[] = s.split("");
  let start: number = 0;
  let end: number = 0;
  let maxFrequency: number = 0;
  let maxLength: number = 0;
  while (end < sArr.length) {
    if (!count[sArr[end]]) {
      count[sArr[end]] = 1;
    } else {
      count[sArr[end]]++;
    }
    maxFrequency = Math.max(maxFrequency, count[sArr[end]]);
    if (end - start + 1 - maxFrequency > K) {
      count[sArr[start]]--;
      start++;
    }
    maxLength = Math.max(maxLength, end - start + 1);
    end++;
  }
  return maxLength;
}
