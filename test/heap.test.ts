import { matchesProperty } from "lodash";
import MaxHeap from "../src/data-types/max-heap";
import MinHeap from "../src/data-types/min-heap";

describe("Heap data structure test", () => {
  test("Max Heap test", () => {
    let maxHeap = new MaxHeap();
    let inArr = [35, 33, 42, 10, 14, 19, 27, 44, 26, 31];

    for (let i = 0; i < inArr.length; i++) {
      maxHeap.insert(inArr[i]);
    }

    expect([44, 42, 35, 33, 31, 19, 27, 10, 26, 14]).toEqual(
      maxHeap.getHeapArray()
    );
  });

  test("Min Heap test", () => {
    let minHeap = new MinHeap();
    let inArr = [35, 33, 42, 10, 14, 19, 27, 44, 26, 31];

    for (let i = 0; i < inArr.length; i++) {
      minHeap.insert(inArr[i]);
    }

    expect([10, 14, 19, 26, 31, 42, 27, 44, 35, 33]).toEqual(
      minHeap.getHeapArray()
    );
  });

  test("Max Heap test", () => {
    let maxHeap = new MaxHeap();
    let inArr = [35, 33, 42, 10, 14, 19, 27, 44, 26, 31];

    for (let i = 0; i < inArr.length; i++) {
      maxHeap.insert(inArr[i]);
    }

    expect(44).toEqual(maxHeap.peek());
  });

  test("Max Heap test", () => {
    let maxHeap = new MaxHeap();
    let inArr = [35, 33, 42, 10, 14, 19, 27, 44, 26, 31];

    for (let i = 0; i < inArr.length; i++) {
      maxHeap.insert(inArr[i]);
    }

    expect(44).toEqual(maxHeap.poll());
  });

  test("Max Heap test", () => {
    let maxHeap = new MaxHeap();
    let inArr = [35, 33, 42, 10, 14, 19, 27, 44, 26, 31];

    for (let i = 0; i < inArr.length; i++) {
      maxHeap.insert(inArr[i]);
    }
    maxHeap.insert(55);

    expect(55).toEqual(maxHeap.peek());
  });

  test("Min Heap test", () => {
    let minHeap = new MinHeap();
    let inArr = [35, 33, 42, 10, 14, 19, 27, 44, 26, 31];

    for (let i = 0; i < inArr.length; i++) {
      minHeap.insert(inArr[i]);
    }

    expect(10).toEqual(minHeap.peek());
  });

  test("Min Heap test", () => {
    let minHeap = new MinHeap();
    let inArr = [35, 33, 42, 10, 14, 19, 27, 44, 26, 31];

    for (let i = 0; i < inArr.length; i++) {
      minHeap.insert(inArr[i]);
    }

    expect(10).toEqual(minHeap.poll());
  });

  test("Min Heap test", () => {
    let minHeap = new MinHeap();
    let inArr = [35, 33, 42, 10, 14, 19, 27, 44, 26, 31];

    for (let i = 0; i < inArr.length; i++) {
      minHeap.insert(inArr[i]);
    }

    minHeap.insert(5);
    expect(5).toEqual(minHeap.poll());
  });
});
