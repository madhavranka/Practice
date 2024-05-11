function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
  let start: number = 0;
  const end: number = arr.length - 1;
  const minHeap = new PriorityQueue({
    compare: (a, b) => a[0] - b[0],
  });
  while (start < end && minHeap.size() <= k) {
    minHeap.enqueue([arr[start] / arr[end], start, end]);
    start++;
  }
  let num: number = 1;
  let pop: number[];
  while (num < k) {
    pop = minHeap.dequeue();
    let i: number = pop[1];
    let j: number = pop[2];
    minHeap.enqueue([arr[i] / arr[j - 1], i, j - 1]);
    num++;
  }
  pop = minHeap.dequeue();
  return [arr[pop[1]], arr[pop[2]]];
}
