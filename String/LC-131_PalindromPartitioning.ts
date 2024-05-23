function partition(s: string): string[][] {
  const result: string[][] = [];
  const sArr: string[] = s.split("");

  const isPalindrome = (left: number, right: number): boolean => {
    while (left < right) {
      if (sArr[left] !== sArr[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };
  const backTrack = (idx: number, curr: string[]) => {
    if (idx === s.length) {
      result.push(curr);
      return;
    }
    for (let i = idx; i < s.length; i++) {
      if (isPalindrome(idx, i)) {
        curr.push(s.substring(idx, i + 1));
        backTrack(i + 1, [...curr]);
        curr.pop();
      }
    }
  };
  backTrack(0, []);
  return result;
}
