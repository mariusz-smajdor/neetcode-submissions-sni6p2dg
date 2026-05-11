class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        const res = new Array(numRows)

        for (let i = 0; i < numRows; i++) {
            res[i] = new Array(i + 1).fill(1)
            const currLen = res[i].length
            for (let j = 1; j < Math.ceil(currLen / 2); j++) {

                const left = res[i - 1][j - 1]
                const right = res[i - 1][j]
                res[i][j] = left + right
                res[i][currLen - 1 - j] = left + right
            }

        }

        return res
    }
}
