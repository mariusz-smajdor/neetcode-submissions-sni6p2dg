class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    countServers(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        const workingServers = new Set();
        const colConns = new Map();

        for (let r = 0; r < rows; r++) {
            let firstServer = "";
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) {
                    const id = `${r},${c}`;
                    colConns.set(c, (colConns.get(c) || new Set()).add(r));
                    if (!firstServer) {
                        firstServer = id;
                    } else {
                        workingServers.add(firstServer);
                        workingServers.add(id);
                    }
                }
            }
        }

        for (const [col, set] of colConns.entries()) {
            if (set.size > 1) {
                for (const row of set.values()) {
                    const id = `${row},${col}`;
                    workingServers.add(id);
                }
            }
        }

        return workingServers.size;
    }
}

/*
    create map with relation col: { ...rows }
    create set of ids that already been included in the count: { `${r},${c}` }

    iterate over all rows
        if we saw 1, toggle flag that 1st was found, save it's coordinates
        all subsequent items in this row will be added do set
    first saw will be saved to set

*/
