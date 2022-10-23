"use strict";
exports.__esModule = true;
var MaxHeap = /** @class */ (function () {
    function MaxHeap() {
        this.arr = new Array();
    }
    MaxHeap.prototype.getHeapArray = function () {
        return this.arr;
    };
    MaxHeap.prototype.heapify = function (input) {
        for (var i = 0; i < input.length; i++) {
            this.arr.push(input[i]);
            this.findCorrectPlace(i);
        }
    };
    MaxHeap.prototype.findCorrectPlace = function (i) {
        var parentIndex = this.getParentIndex(i);
        while (parentIndex >= 0 && this.arr[parentIndex] < this.arr[i]) {
            this.swap(parentIndex, i);
            parentIndex = this.getParentIndex(parentIndex);
        }
    };
    MaxHeap.prototype.swap = function (i, j) {
        var temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    };
    MaxHeap.prototype.insert = function (value) {
        this.arr.push(value);
    };
    MaxHeap.prototype["delete"] = function () {
        return 0;
    };
    MaxHeap.prototype.peek = function () {
        return 0;
    };
    MaxHeap.prototype.getLeftIndex = function (i) {
        return i * 2 + 1;
    };
    MaxHeap.prototype.getRightIndex = function (i) {
        return i * 2 + 2;
    };
    MaxHeap.prototype.getParentIndex = function (i) {
        if (i % 2 === 0) {
            if (i - 2 < 0)
                return -1;
            return (this.arr.length - 2) / 2;
        }
        else {
            if (i - 1 < 0)
                return -1;
            return (this.arr.length - 1) / 2;
        }
    };
    return MaxHeap;
}());
exports["default"] = MaxHeap;
