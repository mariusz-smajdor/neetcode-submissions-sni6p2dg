class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        const originalColor = image[sr][sc];
        if (originalColor === color) return image;

        const rows = image.length;
        const cols = image[0].length;
        const dirs = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        const queue = [[sr, sc]];
        image[sr][sc] = color;
        let head = 0;

        while (head < queue.length) {
            const [r, c] = queue[head++];

            for (const [dr, dc] of dirs) {
                const nr = dr + r;
                const nc = dc + c;

                if (
                    nr < 0 ||
                    nr >= rows ||
                    nc < 0 ||
                    nc >= cols ||
                    image[nr][nc] !== originalColor
                ) {
                    continue;
                }

                queue.push([nr, nc]);
                image[nr][nc] = color;
            }
        }

        return image;
    }
}
