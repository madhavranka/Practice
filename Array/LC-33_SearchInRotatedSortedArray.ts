function search(nums: number[], target: number): number {
  const binarySearch = (start: number, end: number): number => {
    let targetIndex: number = -1;
    while (start <= end) {
      const mid: number = Math.floor(start + (end - start) / 2);
      if (nums[mid] === target) {
        targetIndex = mid;
        break;
      } else if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return targetIndex;
  };

  const findSmallestNumberIndex = (
    nums: number[],
    start: number,
    end: number
  ): number => {
    while (start < end) {
      const mid: number = Math.floor(start + (end - start) / 2);
      if (nums[mid] > nums[end]) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
    return end;
  };

  const pivot: number = findSmallestNumberIndex(nums, 0, nums.length - 1);
  const foundInLeft: number = binarySearch(0, pivot - 1);
  if (foundInLeft === -1) {
    return binarySearch(pivot, nums.length - 1);
  }
  return foundInLeft;
}
