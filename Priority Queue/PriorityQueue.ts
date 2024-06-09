class PriorityQueue<T> {
  comparator: (t1: T, t2: T) => number;
  pq: Array<T>;
  constructor(comparator: (t1: T, t2: T) => number) {
    this.comparator = comparator;
    this.pq = new Array();
  }

  heapify = () => {
    for (let i = this.pq.length - 1; i >= 0; i--) {
      const leftChildIndex: number = 2 * i + 1;
      const rightChildIndex: number = 2 * i + 2;
      if (rightChildIndex < this.pq.length) {
        const indexToSwap: number =
          this.comparator(this.pq[leftChildIndex], this.pq[rightChildIndex]) > 0
            ? rightChildIndex
            : leftChildIndex;
        if (this.comparator(this.pq[i], this.pq[indexToSwap]) > 0) {
          [[this.pq[i], this.pq[indexToSwap]]] = [
            [this.pq[indexToSwap], this.pq[i]],
          ];
        }
      } else if (leftChildIndex < this.pq.length) {
        if (this.comparator(this.pq[i], this.pq[leftChildIndex]) > 0) {
          [[this.pq[i], this.pq[leftChildIndex]]] = [
            [this.pq[leftChildIndex], this.pq[i]],
          ];
        }
      }
    }
  };

  enqueue = (node: T) => {
    this.pq.push(node);
    this.heapify();
  };

  dequeue = (): T | undefined => {
    if (this.pq.length > 0) {
      const result: T | undefined = this.pq.shift();
      this.heapify();
      return result;
    }
    return;
  };
}

function main() {
  const pq = new PriorityQueue((a: any, b: any) => a["a"] - b["a"]);
  pq.enqueue({ a: "Hello", b: 8 });
  console.log(pq.pq);
  pq.enqueue({ a: "Alp", b: 23 });
  console.log(pq.pq);
  pq.enqueue({ a: "Zenga", b: 5 });
  console.log(pq.pq);
  console.log(pq.dequeue());
  console.log(pq.dequeue());
  console.log(pq.dequeue());
}
main();
