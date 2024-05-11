function insert(intervals: number[][], newInterval: number[]): number[][] {
  if (intervals.length < 1) {
    return [newInterval];
  }
  let result: number[][] = [];
  const upperBoundArray: number[] = [];
  intervals.forEach((interval: number[]) => {
    upperBoundArray.push(interval[1]);
  });
  function binarySearch(start: number, end: number) {
    while (start <= end) {
      const mid: number = Math.floor(start + (end - start) / 2);
      if (upperBoundArray[mid] < newInterval[0]) {
        start = mid + 1;
      } else if (upperBoundArray[mid] > newInterval[0]) {
        end = mid - 1;
      } else {
        return mid;
      }
    }
    return end + 1;
  }
  let indexToInsert: number = binarySearch(0, intervals.length - 1);
  let iter: number = 0;
  while (iter < indexToInsert) {
    result.push(intervals[iter]);
    iter++;
  }
  while (
    indexToInsert < intervals.length &&
    intervals[indexToInsert][0] <= newInterval[1]
  ) {
    newInterval[0] = Math.min(newInterval[0], intervals[indexToInsert][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[indexToInsert][1]);
    indexToInsert++;
  }
  result.push(newInterval);
  while (indexToInsert < intervals.length) {
    result.push(intervals[indexToInsert]);
    indexToInsert++;
  }
  return result;
}

console.log(
  insert(
    [
      [2, 3],
      [4, 5],
      [6, 8],
      [9, 10],
      [13, 16],
    ],
    [17, 21]
  )
);
