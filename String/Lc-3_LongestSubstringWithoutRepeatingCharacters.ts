function lengthOfLongestSubstring(s: string): number {
  const mp = {};
  const sArr: string[] = s.split("");
  let start: number = 0;
  let end: number = 0;
  let max: number = 0;
  for (; end < sArr.length; end++) {
    const currentChar: string = sArr[end];
    if (mp[currentChar] >= start) {
      start = mp[currentChar] + 1;
    }
    mp[currentChar] = end;
    max = Math.max(max, end - start + 1);
  }
  return max;
}
