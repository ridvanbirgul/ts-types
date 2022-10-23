class MaxHeap {
  private arr: Array<number>;

  constructor() {
    this.arr = new Array<number>();
  }

  getHeapArray(): Array<number> {
    return this.arr;
  }

  heapifyDown() {
    let i = 0;
    while (this.hasLeftItem(i)) {
      let smallerIndex = this.getLeftIndex(i);
      if (
        this.hasRightItem(i) &&
        this.arr[this.getRightIndex(i)] > this.arr[smallerIndex]
      ) {
        smallerIndex = this.getRightIndex(i);
      }

      if (this.arr[i] > this.arr[smallerIndex]) {
        break;
      } else {
        this.swap(smallerIndex, i);
      }
      i = smallerIndex;
    }
  }

  heapifyUp() {
    let index = this.arr.length - 1;
    while (this.hasParent(index) && this.parent(index) < this.arr[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  swap(i: number, j: number) {
    let temp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = temp;
  }

  insert(value: number) {
    this.arr.push(value);
    this.heapifyUp();
  }

  poll(): number {
    let item = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.heapifyDown();
    return item;
  }

  peek(): number {
    return this.arr[0];
  }

  hasParent(i: number): boolean {
    let parentIndex = this.getParentIndex(i);
    return parentIndex >= 0;
  }

  hasLeftItem(i: number): boolean {
    let leftIndex = this.getLeftIndex(i);
    return this.arr.length > leftIndex;
  }

  hasRightItem(i: number): boolean {
    let rightIndex = this.getRightIndex(i);
    return this.arr.length > rightIndex;
  }

  parent(i: number): number {
    return this.arr[this.getParentIndex(i)];
  }

  getLeftIndex(i: number): number {
    return i * 2 + 1;
  }
  getRightIndex(i: number): number {
    return i * 2 + 2;
  }
  getParentIndex(i: number): number {
    return Math.floor((i - 1) / 2);
  }
}

export default MaxHeap;
