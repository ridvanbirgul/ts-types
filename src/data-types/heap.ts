class MaxHeap {
  private arr: Array<number>;

  constructor() {
    this.arr = new Array<number>();
  }

  getHeapArray(): Array<number> {
    return this.arr;
  }

  heapify(input: Array<number>) {
    for (let i = 0; i < input.length; i++) {
      this.arr.push(input[i]);
      this.findCorrectPlace(i);
    }
  }

  findCorrectPlace(i: number) {
    let parentIndex = this.getParentIndex(i);
    while (parentIndex >= 0 && this.arr[parentIndex] < this.arr[i]) {
      this.swap(parentIndex, i);
      parentIndex = this.getParentIndex(parentIndex);
    }
  }

  swap(i: number, j: number) {
    let temp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = temp;
  }

  insert(value: number) {
    this.arr.push(value);
  }

  delete(): number {
    return 0;
  }

  peek(): number {
    return 0;
  }

  getLeftIndex(i: number): number {
    return i * 2 + 1;
  }
  getRightIndex(i: number): number {
    return i * 2 + 2;
  }
  getParentIndex(i: number): number {
    if (i % 2 === 0) {
      if (i - 2 < 0) return -1;
      return Math.floor((this.arr.length - 2) / 2);
    } else {
      if (i - 1 < 0) return -1;
      return Math.floor((this.arr.length - 1) / 2);
    }
  }
}

export default MaxHeap;
