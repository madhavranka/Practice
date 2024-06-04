function longestPalindrome(s: string): number {
  //just take care of the case where there are two char with odd count, keep the even of all and just one 1 for an odd
  const sArr: string[] = s.split("");
  const mp: Map<string, number> = new Map();
  sArr.forEach((char: string) => {
    if (!mp.has(char)) {
      mp.set(char, 1);
    } else {
      mp.set(char, mp.get(char) + 1);
    }
  });
  let length: number = 0;
  let firstOdd: boolean = false;
  mp.forEach((value, key) => {
    length += value;
    if (value % 2 !== 0) {
      if (!firstOdd) {
        firstOdd = true;
      } else {
        length--;
      }
    }
  });
  return length;
}
