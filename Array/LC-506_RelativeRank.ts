function findRelativeRanks(score: number[]): string[] {
  let maxScore: number = 0;
  score.forEach((num: number) => {
    maxScore = Math.max(maxScore, num);
  });
  const positionMap: number[] = new Array(maxScore + 1).fill(-1);
  for (let i = 0; i < score.length; i++) {
    positionMap[score[i]] = i;
  }
  const result: string[] = new Array(score.length);
  const firstThree: {} = {
    1: "Gold Medal",
    2: "Silver Medal",
    3: "Bronze Medal",
  };
  let rank: number = 0;
  let i = maxScore;
  while (rank < score.length && i > -1) {
    if (positionMap[i] > -1) {
      if (rank < 3) {
        result[positionMap[i]] = firstThree[rank + 1];
        rank++;
      } else {
        result[positionMap[i]] = (rank + 1).toString();
        rank++;
      }
    }
    i--;
  }
  return result;
}
