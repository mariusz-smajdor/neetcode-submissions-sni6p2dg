class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];

        for (const operation of operations) {
            const n = stack.length;

            if (operation === "+") {
                stack.push(stack[n - 1] + stack[n - 2]);
            } else if (operation === "D") {
                stack.push(stack[n - 1] * 2);
            } else if (operation === "C") {
                stack.pop();
            } else {
                stack.push(Number(operation));
            }
        }

        return stack.reduce((a, b) => a + b, 0);
    }
}
