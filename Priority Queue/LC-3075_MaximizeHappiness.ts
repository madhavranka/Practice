function maximumHappinessSum(happiness: number[], k: number): number {
  const maxQ = new PriorityQueue({
    compare: (a: number, b: number) => b - a,
  });
  happiness.forEach((children: number) => {
    maxQ.enqueue(children);
  });
  let sum: number = 0;
  let num: number = 0;
  while (k > 0) {
    sum += Math.max(maxQ.dequeue() - num, 0);
    num++;
    k--;
  }
  return sum;
}
