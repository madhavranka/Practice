function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
  //Count the number of nodes with indegree 0
  const indegree: number[] = new Array(n).fill(0);
  for (let i = 0; i < edges.length; i++) {
    indegree[edges[i][1]] += 1;
  }
  let result: number[] = [];
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) {
      result.push(i);
    }
  }
  return result;
}
