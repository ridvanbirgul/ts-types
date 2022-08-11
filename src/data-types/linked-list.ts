import { cloneDeep } from "lodash";

namespace DataType {
    export class LinkedListNode<Type>{
        private _value: Type;
        private _next: LinkedListNode<Type> | null;
        constructor(value: Type, next: LinkedListNode<Type> | null) {
            this._value = value;
            this._next = next;
        }

        set next(item: LinkedListNode<Type> | null) {
            this._next = item;
        }

        get next(): LinkedListNode<Type> | null {
            return this._next;
        }

        get value(): Type {
            return this._value;
        }
    }


    export class LinkedList<Type>{
        private _head: LinkedListNode<Type> | null;

        constructor() {
            this._head = null;
        }

        add(value: Type): void {
            let lastItem = this.getLast();
            if (lastItem) {
                lastItem.next = new LinkedListNode<Type>(value, null);
            } else {
                this._head = new LinkedListNode<Type>(value, null);
            }
        }

        addFirst(value: Type): void {
            if (this._head) {
                let newNode = new LinkedListNode<Type>(value, cloneDeep(this._head));
                this._head = newNode;
            } else {
                this._head = new LinkedListNode<Type>(value, null);
            }
        }

        addLast(value: Type): void {
            let tail = this.getLast();
            if (tail) {
                tail.next = new LinkedListNode<Type>(value, null);
            } else {
                this._head = new LinkedListNode<Type>(value, null);
            }
        }

        removeFirst(): boolean {
            if (this._head) {
                this._head = this._head.next;
                return true;
            }
            return false;
        }

        removeLast(): boolean {
            let item = this._head;
            while (item && item.next && item.next.next) {
                item = item.next;
            }
            if (item) {
                item.next = null;
                return true;
            }
            return false;
        }

        get count(): number {
            let count = 0;
            let item = this._head;
            while (item) {
                count++;
                item = item.next;
            }
            return count;
        }

        contains(value: Type): boolean {
            let item = this._head;
            while (item) {
                if (item.value === value) return true;
                item = item.next;
            }
            return false;
        }

        getItem(index: number): LinkedListNode<Type> | null {
            if (index > this.count) return null;
            let item = this._head;
            while (item && index) {
                item = item.next;
                index--;
            }
            return item;
        }

        getFirst(): LinkedListNode<Type> | null {
            return this._head;
        }

        getLast(): LinkedListNode<Type> | null {
            if (this._head) {
                let item = this._head;
                while (item.next) {
                    item = item.next;
                }
                return item;
            } else {
                return null;
            }
        }

        clear(): void {
            this._head = null;
        }
    }
}

export default DataType.LinkedList;
export const LinkedListNode = DataType.LinkedListNode;