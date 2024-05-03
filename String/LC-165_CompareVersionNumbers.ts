function compareVersion(version1: string, version2: string): number {
  let v1Arr: string[] = version1.split(".");
  let v2Arr: string[] = version2.split(".");
  const length: number = Math.max(v1Arr.length, v2Arr.length);
  for (let i = 0; i < length; i++) {
    const v1Code: number = parseInt(v1Arr[i] ?? "0");
    const v2Code: number = parseInt(v2Arr[i] ?? "0");
    if (v1Code < v2Code) {
      return -1;
    } else if (v1Code > v2Code) {
      return +1;
    }
  }
  return 0;
}
