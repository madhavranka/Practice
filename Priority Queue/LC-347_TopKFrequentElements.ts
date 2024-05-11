function topKFrequent(nums: number[], k: number): number[] {
  const mp: Map<number, number> = new Map();
  nums.forEach((num: number) => {
    if (mp.has(num)) {
      mp.set(num, mp.get(num) + 1);
    } else {
      mp.set(num, 1);
    }
  });
  const minHeap = new PriorityQueue({
    compare: (a: number[], b: number[]) => a[0] - b[0],
  });
  mp.forEach((count: number, num: number) => {
    minHeap.enqueue([count, num]);
    if (minHeap.size() > k) {
      minHeap.dequeue();
    }
  });
  const result: number[] = [];
  while (minHeap.size() > 0) {
    result.push(minHeap.dequeue()[1]);
  }
  return result;
}
