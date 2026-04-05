class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []

        for (const token of tokens) {
            if (token === '+') {
                stack.push(stack.pop() + stack.pop())
            } else if (token === '-') {
                const right = stack.pop()
                const left = stack.pop()
                stack.push(left - right)
            } else if (token === '*') {
                stack.push(stack.pop() * stack.pop())
            } else if (token === '/') {
                const right = stack.pop()
                const left = stack.pop()
                stack.push(Math.trunc(left / right))           
            } else {
                stack.push(Number(token))
            }
        }

        return stack.pop()
    }
}
// if number move to tmp res
// if operator && tmp.length -> do computation on tmp
// else go to res and do computation on them

