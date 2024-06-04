function findCenter(edges: number[][]): number {
  const set: Set<number> = new Set();
  for (let i = 0; i < edges.length; i++) {
    const edge: number[] = edges[i];
    let u: number = edge[0];
    let v: number = edge[1];
    if (set.has(u)) return u;
    if (set.has(v)) return v;
    set.add(u);
    set.add(v);
  }
  return 0;
}
