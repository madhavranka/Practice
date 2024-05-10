function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const adj: number[][] = new Array(numCourses + 1).fill([]).map((n) => {
    return new Array();
  });
  prerequisites.forEach((pair: number[]) => {
    adj[pair[1]].push(pair[0]);
  });
  const visited: number[] = new Array(numCourses + 1).fill(0);

  function isCycleDfs(u: number): boolean {
    visited[u] = 2; //mark as visited and in recursion
    const neighbor: number[] = adj[u];
    for (let i = 0; i < neighbor.length; i++) {
      const v: number = neighbor[i];
      if ((visited[v] === 0 && isCycleDfs(v)) || visited[v] === 2) {
        return true;
      }
    }
    visited[u] = 1; //as the dfs cycle is over, mark it as not in recursion but keep it as visited
    return false;
  }

  for (let i = 0; i < adj.length; i++) {
    if (adj[i] && !visited[i] && isCycleDfs(i)) {
      return false;
    }
  }
  return true;
}
