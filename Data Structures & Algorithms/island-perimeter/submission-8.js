class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        let land = null;
        for (let r = 0; r < rows && land === null; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) {
                    land = [r, c];
                    grid[r][c] = 2;
                    break;
                }
            }
        }

        const queue = [land];
        let head = 0;
        let p = 0;
        const dirs = [
            [-1, 0],
            [1, 0],
            [0, 1],
            [0, -1],
        ];

        const oob = (r, c) => r < 0 || r >= rows || c < 0 || c >= cols;

        while (head < queue.length) {
            const [cr, cc] = queue[head++];

            let tmp = 0;
            for (const [dr, dc] of dirs) {
                const nr = cr + dr;
                const nc = cc + dc;

                if (oob(nr, nc) || grid[nr][nc] === 0) {
                    tmp++;
                    continue;
                }

                if (grid[nr][nc] === 2) {
                    continue;
                }

                grid[nr][nc] = 2;
                queue.push([nr, nc]);
            }

            p += tmp;
        }

        return p;
    }
}
