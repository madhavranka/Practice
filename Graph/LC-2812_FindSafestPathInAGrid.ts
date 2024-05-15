const dir: number[][] = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function maximumSafenessFactor(grid: number[][]): number {
  const SIZE: number = grid.length;
  const distanceFromNearestTheif: number[][] = new Array(SIZE)
    .fill([])
    .map((arr: number[]) => new Array(SIZE).fill(-1));
  const visited: boolean[][] = new Array(SIZE)
    .fill([])
    .map((arr: boolean[]) => new Array(SIZE).fill(false));
  const queue: number[][] = [];
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      if (grid[i][j] === 1) {
        visited[i][j] = true;
        queue.push([i, j]);
      }
    }
  }
  let level: number = 0;
  while (queue.length > 0) {
    let size: number = queue.length;
    while (size > 0) {
      const pop: number[] = queue.shift();
      const r: number = pop[0];
      const c: number = pop[1];
      distanceFromNearestTheif[r][c] = level;
      for (let i = 0; i < dir.length; i++) {
        const m: number = r + dir[i][0];
        const n: number = c + dir[i][1];
        if (m >= 0 && n >= 0 && m < SIZE && n < SIZE && !visited[m][n]) {
          queue.push([m, n]);
          visited[m][n] = true;
        }
      }
      size--;
    }
    level++;
  }

  const maxHeap = new PriorityQueue({
    compare: (a, b) => b[0] - a[0],
  });
  maxHeap.enqueue([distanceFromNearestTheif[0][0], 0, 0]);
  const visited2: boolean[][] = new Array(SIZE)
    .fill([])
    .map((arr: boolean[]) => new Array(SIZE).fill(false));
  visited2[0][0] = true;

  while (maxHeap.size() > 0) {
    const [safeness, r, c] = maxHeap.dequeue();
    if (r === SIZE - 1 && c === SIZE - 1) {
      return safeness;
    }
    for (let i = 0; i < dir.length; i++) {
      const m: number = r + dir[i][0];
      const n: number = c + dir[i][1];
      if (m >= 0 && n >= 0 && m < SIZE && n < SIZE && !visited2[m][n]) {
        visited2[m][n] = true;
        maxHeap.enqueue([
          Math.min(safeness, distanceFromNearestTheif[m][n]),
          m,
          n,
        ]);
      }
    }
  }

  return 0;
}
