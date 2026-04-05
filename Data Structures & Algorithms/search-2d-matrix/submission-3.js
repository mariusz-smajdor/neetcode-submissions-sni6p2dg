class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let n = matrix.length
        let m = matrix[0].length

        let l = 0
        let r = n * m - 1

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2)
            const row = Math.floor(mid / m)
            const col = mid % m

            if (target > matrix[row][col]) {
                l = mid + 1
            } else if (target < matrix[row][col]) {
                r = mid - 1
            } else {
                return true
            }
        }

        return false
    }
}
