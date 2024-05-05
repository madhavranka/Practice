function exist(board: string[][], word: string): boolean {
  const wordArr: string[] = word.split("");
  const bfs = (
    row: number,
    col: number,
    index: number
  ): boolean | undefined => {
    if (
      row < board.length &&
      row >= 0 &&
      col >= 0 &&
      col < board[0].length &&
      board[row][col] === wordArr[index]
    ) {
      const temp: string = board[row][col];
      board[row][col] = "$";
      if (index === wordArr.length - 1) {
        return true;
      } else {
        if (
          bfs(row + 1, col, index + 1) ||
          bfs(row - 1, col, index + 1) ||
          bfs(row, col - 1, index + 1) ||
          bfs(row, col + 1, index + 1)
        ) {
          return true;
        }
        board[row][col] = temp;
      }
    }
  };
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (bfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
}
