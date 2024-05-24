function maxScoreWords(
  words: string[],
  letters: string[],
  score: number[]
): number {
  const letterMap = {};
  letters.forEach((char: string) => {
    if (!letterMap[char]) {
      letterMap[char] = [];
    }
    letterMap[char]++;
  });
  let maxScore: number = 0;

  const validConditionToTake = (wArr: string[], letterMap: any): number => {
    let marks: number = 0;
    for (let i = 0; i < wArr.length; i++) {
      if (!letterMap[wArr[i]] || letterMap[wArr[i]] <= 0) {
        return 0;
      }
      letterMap[wArr[i]]--;
      const idx: number = wArr[i].charCodeAt(0) - "a".charCodeAt(0);
      marks += score[idx];
    }
    return marks;
  };
  const solve = (idx: number, letterMap: any, s: number) => {
    if (idx >= words.length) {
      maxScore = Math.max(maxScore, s);
      return;
    }
    const wArr: string[] = words[idx].split("");
    let tempMap = { ...letterMap }; //use tempMap only if true
    let tempScore: number = s + validConditionToTake(wArr, tempMap);
    if (tempScore > s) {
      solve(idx + 1, tempMap, tempScore);
    }
    //skip
    solve(idx + 1, letterMap, s);
    return;
  };
  solve(0, letterMap, 0);
  return maxScore;
}
