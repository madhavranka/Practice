function findPermutationDifference(s: string, t: string): number {
  const sMp = {};
  const tMp = {};
  const sArr: string[] = s.split("");
  const tArr: string[] = t.split("");
  for (let i = 0; i < sArr.length; i++) {
    sMp[sArr[i]] = i;
  }
  for (let i = 0; i < tArr.length; i++) {
    tMp[tArr[i]] = i;
  }
  const charIndex: string[] = Object.keys(sMp);
  let ans: number = 0;
  charIndex.forEach((char: string) => {
    ans += Math.abs(sMp[char] - tMp[char]);
  });
  return ans;
}
