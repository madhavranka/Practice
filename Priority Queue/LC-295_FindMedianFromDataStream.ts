class MedianFinder {
  leftMaxQ;
  rightMinQ;
  constructor() {
    this.leftMaxQ = new PriorityQueue({
      compare: (a: number, b: number) => b - a,
    });
    this.rightMinQ = new PriorityQueue({
      compare: (a: number, b: number) => a - b,
    });
  }

  addNum(num: number): void {
    if (this.leftMaxQ.size() === 0 || num < this.leftMaxQ.front()) {
      this.leftMaxQ.enqueue(num);
    } else {
      this.rightMinQ.enqueue(num);
    }
    if (this.leftMaxQ.size() - this.rightMinQ.size() > 1) {
      this.rightMinQ.enqueue(this.leftMaxQ.deQueue());
    } else if (this.leftMaxQ.size() < this.rightMinQ.size()) {
      this.leftMaxQ.enqueue(this.rightMinQ.dequeue());
    }
  }

  findMedian(): number {
    if (this.leftMaxQ.size() === this.rightMinQ.size()) {
      return (this.leftMaxQ.front() + this.rightMinQ.front()) / 2;
    }
    return this.leftMaxQ.front();
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
