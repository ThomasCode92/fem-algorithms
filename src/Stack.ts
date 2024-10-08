type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    private head?: Node<T>;
    public length: number;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node: Node<T> = { value: item };
        this.length++;

        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }

        const head = this.head as Node<T>;
        this.head = head.prev;
        head.prev = undefined;

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
