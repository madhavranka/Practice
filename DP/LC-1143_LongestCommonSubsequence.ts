function longestCommonSubsequence(text1: string, text2: string): number {
  const ROWS: number = text1.length;
  const COLS: number = text2.length;
  const tArray: string[] = text2.split("");
  const sArray: string[] = text1.split("");
  const dp: number[][] = new Array(ROWS + 1)
    .fill([])
    .map((arr: number[]) => new Array(COLS + 1).fill(0));
  for (let i = 1; i <= ROWS; i++) {
    for (let j = 1; j <= COLS; j++) {
      if (sArray[i - 1] === tArray[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[ROWS][COLS];
}
