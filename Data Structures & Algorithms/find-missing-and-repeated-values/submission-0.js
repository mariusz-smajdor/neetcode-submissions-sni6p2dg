class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        const n = grid.length
        const freq = grid.reduce((acc, curr) => {
            curr.forEach(i => acc[i] = (acc[i] || 0) + 1)
            return acc
        }, {})

        const res = []
        for (let i = 1; i <= n * n; i++) {
            if (!freq[i]) {
                res.push(i)
            }
            if (freq[i] === 2) {
                res.unshift(i)
            }
        }
        return res
    }
}
