function eraseOverlapIntervals(intervals: number[][]): number {
  let ans: number = 0;
  intervals.sort((a: number[], b: number[]) => a[0] - b[0]);
  let prevEnd: number = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= prevEnd) {
      prevEnd = intervals[i][1];
    } else {
      ans += 1;
      prevEnd = Math.min(intervals[i][1], prevEnd);
    }
  }
  return ans;
}
