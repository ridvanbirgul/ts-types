namespace DataType {
    export class Queue<Type> {
        private readonly data: Array<Type>;

        constructor() {
            this.data = new Array<Type>();
        }

        add(item: Type) {
            this.data.push(item);
        }

        remove(): Type | undefined {
            return this.data.shift()!;
        }

        peek(): Type | undefined {
            if (this.data.length > 0) {
                return this.data[0];
            }
            return undefined;
        }

        get count(): number {
            return this.data.length;
        }

        clear(): void {
            this.data.length = 0;
        }

        get isEmpty(): boolean {
            return this.data.length === 0;
        }
    }
}

export default DataType.Queue;