class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isOpenBracket(ch) {
        return ch === '(' ||
                ch === '[' ||
                ch === '{'
    }

    isValid(s) {
        const stack = []

        for (const ch of s) {
            if (ch === '(') stack.unshift(')')
            else if (ch === '{') stack.unshift('}')
            else if (ch === '[') stack.unshift(']')
            else {
                const shifted = stack.shift()
                if (shifted !== ch) return false
            }
        }

        return stack.length ? false : true
    }
}
