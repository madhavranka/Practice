/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const listOfRow: boolean[] = new Array(matrix.length).fill(false);
  const listOfCol: boolean[] = new Array(matrix[0].length).fill(false);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        listOfRow[i] = true;
        listOfCol[j] = true;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    if (listOfRow[i]) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  for (let i = 0; i < listOfCol.length; i++) {
    if (listOfCol[i]) {
      for (let j = 0; j < matrix.length; j++) {
        matrix[j][i] = 0;
      }
    }
  }
}
