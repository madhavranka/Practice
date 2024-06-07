function canVisitAllRooms(rooms: number[][]): boolean {
  const visited: Set<number> = new Set([0]);
  const dfs = (room) => {
    const adjRooms: number[] = rooms[room];
    for (let i = 0; i < adjRooms.length; i++) {
      if (!visited.has(adjRooms[i]) && adjRooms[i] !== room) {
        visited.add(adjRooms[i]);
        dfs(adjRooms[i]);
      }
    }
  };
  dfs(0);
  return visited.size === rooms.length;
}
