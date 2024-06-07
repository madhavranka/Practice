function isNStraightHand(hand: number[], groupSize: number): boolean {
  hand.sort((a, b) => a - b);
  const mp: Map<number, number> = new Map();
  let i = 0;
  while (i < hand.length) {
    const card: number = hand[i];
    mp.set(card, (mp.get(card) ?? 0) + 1);
    i++;
  }
  while (mp.size > 0) {
    const keys = mp.keys();
    const key: number = keys.next().value;
    const value: number | undefined = mp.get(key);
    if (value && value > 0) {
      for (let i = 0; i < groupSize; i++) {
        const countOfNextKey: number = mp.get(key + i) ?? 0;
        if (countOfNextKey < 1) {
          return false;
        }
        mp.set(key + i, countOfNextKey - 1);
        if (countOfNextKey - 1 < 1) {
          mp.delete(key + i);
        }
      }
    } else {
      mp.delete(key);
    }
  }

  return true;
}
