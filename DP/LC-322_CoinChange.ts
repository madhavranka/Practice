function coinChange(coins: number[], amount: number): number {
  let amountToCoinMap: number[] = new Array(amount + 1).fill(amount + 1);
  amountToCoinMap[0] = 0;
  let amountToCompute: number = 1;
  while (amountToCompute < amount + 1) {
    for (let i = 0; i < coins.length; i++) {
      if (amountToCompute - coins[i] >= 0) {
        amountToCoinMap[amountToCompute] = Math.min(
          amountToCoinMap[amountToCompute],
          1 + amountToCoinMap[amountToCompute - coins[i]]
        );
      }
    }
    amountToCompute++;
  }

  return amountToCoinMap[amount] === amount + 1 ? -1 : amountToCoinMap[amount];
}
