class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        const pMap = { "(": ")", "[": "]", "{": "}" };
        const isOpen = (p) => p === "(" || p === "[" || p === "{";

        for (let i = 0; i < s.length; i++) {
            const p = s[i];
            if (isOpen(p)) {
                stack.push(pMap[p]);
            } else {
                const popped = stack.pop();
                if (popped !== s[i]) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
