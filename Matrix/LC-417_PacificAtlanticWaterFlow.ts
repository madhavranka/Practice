function pacificAtlantic(heights: number[][]): number[][] {
  const ROWS: number = heights.length;
  const COLS: number = heights[0].length;
  const atlantic: boolean[][] = new Array(ROWS)
    .fill([])
    .map((n: boolean[]) => new Array(COLS).fill(false));
  const pacific: boolean[][] = new Array(ROWS)
    .fill([])
    .map((n: boolean[]) => new Array(COLS).fill(false));
  const result: number[][] = [];

  const dfs = (
    row: number,
    col: number,
    visitMap: boolean[][],
    prevHeight: number
  ) => {
    if (
      row < 0 ||
      col < 0 ||
      row === ROWS ||
      col === COLS ||
      visitMap[row][col] ||
      heights[row][col] < prevHeight
    ) {
      return;
    }
    visitMap[row][col] = true;
    dfs(row - 1, col, visitMap, heights[row][col]);
    dfs(row + 1, col, visitMap, heights[row][col]);
    dfs(row, col - 1, visitMap, heights[row][col]);
    dfs(row, col + 1, visitMap, heights[row][col]);
  };

  for (let c = 0; c < COLS; c++) {
    dfs(ROWS - 1, c, atlantic, heights[ROWS - 1][c]);
    dfs(0, c, pacific, heights[0][c]);
  }

  for (let r = 0; r < ROWS; r++) {
    dfs(r, COLS - 1, atlantic, heights[r][COLS - 1]);
    dfs(r, 0, pacific, heights[r][0]);
  }

  for (let i = 0; i < atlantic.length; i++) {
    for (let j = 0; j < atlantic[0].length; j++) {
      if (atlantic[i][j] && pacific[i][j]) {
        result.push([i, j]);
      }
    }
  }
  return result;
}
