function maxArea(height: number[]): number {
  let area: number = 0;
  let start: number = 0;
  let end: number = height.length - 1;
  while (start < end) {
    const hLeft: number = height[start];
    const hRight: number = height[end];
    const a: number = Math.min(hLeft, hRight) * (end - start);
    area = Math.max(a, area);
    if (hLeft < hRight) {
      while (height[start] <= hLeft) {
        start++;
      }
    } else {
      while (height[end] <= hRight) {
        end--;
      }
    }
  }
  return area;
}
