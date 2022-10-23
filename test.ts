import MaxHeap from "./src/data-types/heap";

let maxHeap = new MaxHeap();
let inArr = [35, 33, 42, 10, 14, 19, 27, 44, 26, 31];
maxHeap.heapify(inArr);
console.log(maxHeap.getHeapArray());
