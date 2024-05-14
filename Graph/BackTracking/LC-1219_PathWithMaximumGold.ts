function getMaximumGold(grid: number[][]): number {
  const ROWS: number = grid.length;
  const COLS: number = grid[0].length;
  let res: number = 0;
  const dfs = (r: number, c: number, ans: number) => {
    if (r < 0 || c < 0 || r >= ROWS || c === COLS || grid[r][c] < 1) {
      res = Math.max(ans, res);
      if (ans === 60) {
        console.log(grid);
      }
      return;
    }
    ans += grid[r][c];
    grid[r][c] *= -1;
    dfs(r + 1, c, ans),
      dfs(r - 1, c, ans),
      dfs(r, c + 1, ans),
      dfs(r, c - 1, ans);
    grid[r][c] *= -1;
  };
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      dfs(i, j, 0);
    }
  }
  return res;
}
