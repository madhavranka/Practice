class GraphNode {
  v: number;
  cost: number;
  constructor(v: number, cost: number) {
    this.v = v;
    this.cost = cost;
  }
}

class Graph {
  adjList: GraphNode[][];
  constructor(n: number, edges: number[][]) {
    this.adjList = new Array(n).fill([]).map((arr) => new Array(n));
    edges.forEach((edge: number[]) => this.addEdge(edge));
  }

  addEdge(edge: number[]): void {
    const u: number = edge[0];
    const v: number = edge[1];
    const cost: number = edge[2];
    this.adjList[u][v] = new GraphNode(v, cost);
  }

  shortestPath(node1: number, node2: number): number {
    const visited: Set<number> = new Set();
    const distance: number[] = new Array(this.adjList.length).fill(Infinity);
    distance[node1] = 0;
    const findMinDistanceIndex = (): number => {
      let min = Infinity;
      let minIndex = -1;

      for (let v = 0; v < distance.length; v++) {
        if (!visited.has(v) && distance[v] <= min) {
          min = distance[v];
          minIndex = v;
        }
      }
      return minIndex;
    };
    for (let i = 0; i < this.adjList.length - 1; i++) {
      //getMinimumDistance node from source
      const u: number = findMinDistanceIndex();
      visited.add(u);
      this.adjList[u].forEach((node: GraphNode) => {
        const v: number = node.v;
        const cost: number = node.cost;
        if (distance[u] !== Infinity) {
          distance[v] = Math.min(distance[v], distance[u] + cost);
        }
      });
    }
    return distance[node2] !== Infinity ? distance[node2] : -1;
  }
}
