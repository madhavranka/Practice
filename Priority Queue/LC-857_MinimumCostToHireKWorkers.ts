function mincostToHireWorkers(
  quality: number[],
  wage: number[],
  k: number
): number {
  const workers: number[][] = [];
  for (let i = 0; i < quality.length; i++) {
    workers.push([wage[i] / quality[i], i]);
  }
  workers.sort((a, b) => a[0] - b[0]);
  const maxHeap = new PriorityQueue({
    compare: (a, b) => b - a,
  });
  let ans: number = Infinity;
  let qualitySum: number = 0;
  for (let i = 0; i < workers.length; i++) {
    const ratio: number = workers[i][0];
    qualitySum += quality[workers[i][1]];
    maxHeap.enqueue(quality[workers[i][1]]);
    if (maxHeap.size() > k) {
      qualitySum -= maxHeap.dequeue();
    }
    if (maxHeap.size() === k) {
      ans = Math.min(ans, qualitySum * ratio);
    }
  }
  return ans;
}
