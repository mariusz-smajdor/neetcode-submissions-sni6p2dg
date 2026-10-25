class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
        this.len = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const min = this.len ? Math.min(this.minStack[this.len - 1], val) : val;
        this.len++;
        this.stack.push(val);
        this.minStack.push(min);
    }

    /**
     * @return {void}
     */
    pop() {
        this.len--;
        this.minStack.pop();
        return this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.len - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.len - 1];
    }
}
