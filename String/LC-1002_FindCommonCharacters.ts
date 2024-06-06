const getCharMapFromString = (s: string) => {
  const map = {};
  s.split("").forEach((char: string) => {
    if (!map[char]) {
      map[char] = 0;
    }
    map[char]++;
  });
  return map;
};
function commonChars(words: string[]): string[] {
  const firstWordMap = getCharMapFromString(words[0]);

  for (let i = 1; i < words.length; i++) {
    const wordMap = getCharMapFromString(words[i]);
    const objKeys: string[] = Object.keys(firstWordMap);
    objKeys.forEach((char: string) => {
      if (!wordMap[char]) {
        delete firstWordMap[char];
      } else {
        firstWordMap[char] = Math.min(firstWordMap[char], wordMap[char]);
      }
    });
  }
  const result: string[] = [];
  const objKeys: string[] = Object.keys(firstWordMap);
  objKeys.forEach((char) => {
    for (let i = 1; i <= firstWordMap[char]; i++) {
      result.push(char);
    }
  });
  return result;
}
