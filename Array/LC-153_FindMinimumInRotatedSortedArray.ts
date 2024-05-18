function findMin(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  const binarySearch = (start: number, end: number) => {
    while (start <= end) {
      const mid = Math.floor(start + (end - start) / 2);
      if (nums[mid] < nums[end]) {
        end = mid;
      } else if (nums[mid] > nums[end]) {
        start = mid + 1;
      } else {
        return nums[mid];
      }
    }
    return nums[end + 1];
  };
  return binarySearch(0, nums.length - 1);
}
