class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const DIRS = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const INF = 2147483647;

        const queue = [];
        let head = 0;

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r, c, 0]);
                }
            }
        }

        while (head < queue.length) {
            const [cr, cc] = queue[head++];

            for (const [dr, dc] of DIRS) {
                const nr = cr + dr;
                const nc = cc + dc;

                if (nr < 0 || nr === ROWS || nc < 0 || nc === COLS || grid[nr][nc] !== INF) {
                    continue;
                }

                grid[nr][nc] = grid[cr][cc] + 1;
                queue.push([nr, nc]);
            }
        }

        return grid;
    }
}

/*
    gather information where all 0 are
    [...[r,c]...]
    go over all 0 coordinates and keep track of steps taken
    if taken steps is less than INF replace inf otherwise dont do anything there :)
*/
