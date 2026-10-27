class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        let min = 0;
        let max = rows - 1;

        while (min <= max) {
            const row = Math.floor((min + max) / 2);

            if (target >= matrix[row][0] && target <= matrix[row][cols - 1]) {
                min = 0;
                max = cols - 1;

                while (min <= max) {
                    const col = Math.floor((min + max) / 2);

                    if (target === matrix[row][col]) {
                        return true;
                    }

                    if (target > matrix[row][col]) {
                        min = col + 1;
                    } else {
                        max = col - 1;
                    }
                }

                return false;
            }

            if (target > matrix[row][0]) {
                min = row + 1;
            } else {
                max = row - 1;
            }
        }

        return false;
    }
}
