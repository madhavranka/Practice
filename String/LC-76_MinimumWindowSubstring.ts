function minWindow(s: string, t: string): string {
  if (s.length < t.length) return "";
  const sArr: string[] = s.split("");
  const tArr: string[] = t.split("");
  const sMap = {};
  const tMap = {};
  tArr.forEach((char: string) => {
    if (!tMap[char]) {
      tMap[char] = 0;
    }
    tMap[char]++;
  });

  const countOfTCharInSubstring = (): number => {
    let count: number = 0;
    Object.keys(tMap).forEach((char: string) => {
      if (sMap[char] > tMap[char]) {
        count += tMap[char];
      } else {
        count += sMap[char] ?? 0;
      }
    });
    return count;
  };

  let start: number = 0;
  let end: number = 0;
  let ans: number[] = [0, sArr.length];
  let prevEnd: number = -1;
  while (start <= end) {
    let char: string = sArr[end];
    let count: number = countOfTCharInSubstring();
    while (count < tArr.length && end < sArr.length) {
      if (end !== prevEnd) {
        char = sArr[end];
        if (!sMap[char]) {
          sMap[char] = 0;
        }
        sMap[char]++;
      }
      count = countOfTCharInSubstring();
      if (count === tArr.length) {
        prevEnd = end;
        break;
      }
      end++;
    }

    if (count === tArr.length) {
      if (end - start < ans[1] - ans[0]) {
        ans = [start, end];
      }
    }
    sMap[sArr[start]]--;
    start++;
  }

  let result: string = "";
  if (ans[1] >= sArr.length) {
    return result;
  }
  for (let k = ans[0]; k <= ans[1]; k++) {
    result += sArr[k];
  }
  return result;
}

console.log(minWindow("ADOBECODEBANC", ""));
