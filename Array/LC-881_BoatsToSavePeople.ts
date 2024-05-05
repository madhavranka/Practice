function numRescueBoats(people: number[], limit: number): number {
  people.sort((a, b) => a - b);
  let start: number = 0;
  let end: number = people.length - 1;
  let ans: number = 0;
  while (start <= end) {
    if (people[start] + people[end] <= limit) {
      start++;
      end--;
      ans++;
    } else {
      end--;
      ans++;
    }
  }
  return ans;
}
