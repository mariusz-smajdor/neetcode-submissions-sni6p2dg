class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        let top = 0;
        let bottom = rows - 1;

        while (top <= bottom) {
            const mid = Math.floor((bottom + top) / 2);

            if (target >= matrix[mid][0] && target <= matrix[mid][cols - 1]) {
                const row = matrix[mid];
                let left = 0;
                let right = cols - 1;

                while (left <= right) {
                    const mid = Math.floor((left + right) / 2);

                    if (target === row[mid]) {
                        return true;
                    }

                    if (target > row[mid]) {
                        left = mid + 1;
                    } else {
                        right = mid - 1;
                    }
                }
            }

            if (target > matrix[mid][0]) {
                top = mid + 1;
            } else {
                bottom = mid - 1;
            }
        }

        return false;
    }
}
