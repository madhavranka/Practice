class GraphNode {
  val: number;
  neighbors: GraphNode[];
  constructor(val?: number, neighbors?: GraphNode[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

function cloneGraph(node: GraphNode | null): GraphNode | null {
  if (!node) return null;
  const queue: GraphNode[] = [node];
  let result: GraphNode = new GraphNode(node.val);
  const visited = {};
  visited[node.val] = result;
  while (queue.length > 0) {
    let pop: GraphNode = queue.shift();
    let newNode: GraphNode = visited[pop.val];
    pop.neighbors.forEach((neighbor: GraphNode) => {
      if (visited[neighbor.val]) {
        newNode.neighbors.push(visited[neighbor.val]);
      } else {
        let tempNode: GraphNode = new GraphNode(neighbor.val);
        visited[neighbor.val] = tempNode;
        newNode.neighbors.push(tempNode);
        queue.push(neighbor);
      }
    });
  }
  return result;
}
