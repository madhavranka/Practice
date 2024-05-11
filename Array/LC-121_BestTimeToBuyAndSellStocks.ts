function maxProfit(prices: number[]): number {
  const maxArray: number[] = new Array(prices.length).fill(0);
  let end: number = prices.length - 1;
  let max: number = 0;
  while (end > 0) {
    max = Math.max(max, prices[end]);
    maxArray[end - 1] = max;
    end--;
  }
  let profit: number = 0;
  for (let i = 0; i < prices.length; i++) {
    profit = Math.max(profit, maxArray[i] - prices[i]);
  }
  return profit;
}
