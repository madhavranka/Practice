const dir: number[][] = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
function numIslands(grid: string[][]): number {
  if (!grid) {
    return 0;
  }
  let numOfIslands: number = 0;
  const dfs = (r: number, c: number) => {
    if (
      r >= 0 &&
      c >= 0 &&
      r < grid.length &&
      c < grid[0].length &&
      grid[r][c] === "1"
    ) {
      grid[r][c] = "$";
      dir.forEach((direction: number[]) => {
        dfs(r + direction[0], c + direction[1]);
      });
    }
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        numOfIslands += 1;
        dfs(i, j);
      }
    }
  }
  return numOfIslands;
}
