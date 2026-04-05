class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for (let i = 0; i < matrix.length; i++) {
            const currentRow = matrix[i]
            if (target >= currentRow[0] && target <= currentRow[currentRow.length - 1]) {
                for (let j = 0; j < currentRow.length; j++) {
                    if (currentRow[j] === target) return true
                }
                return false
            }
        }
        return false
    }
}
