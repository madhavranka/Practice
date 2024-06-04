function allPathsSourceTarget(graph: number[][]): number[][] {
  const target: number = graph.length - 1;
  const result: number[][] = [];
  const solve = (num: number, curr: number[]) => {
    const neighbors: number[] = graph[num];
    neighbors.forEach((neighbor: number) => {
      const newCurr: number[] = [...curr];
      newCurr.push(neighbor);
      if (neighbor === target) {
        result.push(newCurr);
      } else {
        solve(neighbor, newCurr);
      }
    });
  };
  solve(0, [0]);
  return result;
}
