function largestLocal(grid: number[][]): number[][] {
  let result: number[][] = new Array(grid.length - 2)
    .fill([])
    .map((n) => new Array(grid[0].length - 2).fill(0));
  for (let i = 0; i < grid.length - 2; i++) {
    for (let j = 0; j < grid[0].length - 2; j++) {
      result[i][j] = findMax(i, j, grid);
    }
  }
  return result;
}

function findMax(i: number, j: number, grid: number[][]) {
  let max: number = 0;
  let row: number = i + 2;
  let col: number = j + 2;
  while (i <= row) {
    let jter: number = j;
    while (jter <= col) {
      max = Math.max(grid[i][jter], max);
      jter++;
    }
    i++;
  }
  return max;
}
