function matrixScore(grid: number[][]): number {
  //start maximising the most significant bit that column 0 then 1...
  for (let row = 0; row < grid.length; row++) {
    if (grid[row][0] === 0) {
      //flip the entire row
      for (let col = 0; col < grid[0].length; col++) {
        grid[row][col] = grid[row][col] ^ 1;
      }
    }
  }
  for (let col = 1; col < grid[0].length; col++) {
    //count the number of zeroes in the column
    let countOfZero: number = 0;
    for (let row = 0; row < grid.length; row++) {
      if (grid[row][col] === 0) {
        countOfZero++;
      }
    }
    if (countOfZero > Math.floor(grid.length / 2)) {
      //flip the column
      for (let i = 0; i < grid.length; i++) {
        grid[i][col] = grid[i][col] ^ 1;
      }
    }
  }
  let power: number = grid[0].length - 1;
  let ans: number = 0;
  for (let col = 0; col < grid[0].length; col++) {
    for (let row = 0; row < grid.length; row++) {
      ans += grid[row][col] === 1 ? Math.pow(2, power) : 0;
    }
    power--;
  }
  return ans;
}
