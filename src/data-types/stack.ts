namespace DataType {
    /**
     * Stack data type works like LIFO(Last In First Out)
     */
    export class Stack<Type> {
        private readonly data: Array<Type>;
        
        
        constructor() {
            this.data = new Array<Type>();
        }

        /**
         * Add an item to stack
         * @param item
         */
        push(item: Type): void {
            this.data.push(item);
        }

        /**
         * return the first element of Stack and remove item from the stack
         */
        pop(): Type | undefined {
            return this.data.pop();
        }

        /**
         * Returns the first element of stack but not remove item from the stack
         */
        peek(): Type | undefined {
            return this.data.at(this.data.length - 1);
        };

        /**
         * Returns true if stack is empty, otherwise return false
         */
        get isEmpty(): boolean {
            return this.data.length === 0;
        }

        /**
         * Returns count of item into the stack
         */
        get count(): number {
            return this.data.length;
        }

        /**
         * Clear stack
         */
        clear(): void {
            this.data.length = 0;
        }

        /**
         * Checks wheter item is exists in the stack or not.
         * @param item
         */
        isExist(item: Type): boolean {
            return this.data.includes(item);
        }
    }
}

export default DataType.Stack;