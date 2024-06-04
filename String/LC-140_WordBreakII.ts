function wordBreak(s: string, wordDict: string[]): string[] {
  const result: string[] = [];
  const wordMap = {};
  wordDict.forEach((word: string) => {
    if (!wordMap[word]) {
      wordMap[word] = true;
    }
  });
  const sArr: string[] = s.split("");
  const solve = (i: number, curr: string) => {
    if (i >= s.length) {
      console.log(i);
      if (wordMap[curr]) {
        result.push(curr);
      }
      return;
    }
    // const word: string = wordDict[idx];
    let iter: number = i;
    let tempWord: string = "";
    while (!wordMap[tempWord]) {
      tempWord += sArr[iter];
      iter++;
    }
    // curr += " " + tempWord;
    solve(iter, curr + " " + tempWord);

    solve(iter, curr);
  };
  solve(0, "");
  return result;
}
wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]);
