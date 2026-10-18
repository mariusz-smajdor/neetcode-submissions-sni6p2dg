class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (n === 0) return true;

        const adjMap = new Map();
        for (let i = 0; i < n; i++) adjMap.set(i, new Set());
        for (const [n1, n2] of edges) {
            adjMap.get(n1).add(n2);
            adjMap.get(n2).add(n1);
        }

        const visited = new Set();
        function dfs(v, prev) {
            if (visited.has(v)) return false;

            visited.add(v);

            for (const c of adjMap.get(v).values()) {
                if (c === prev) continue;
                if (!dfs(c, v)) {
                    return false;
                }
            }

            return true;
        }

        return dfs(0, -1) && visited.size === n;
    }
}
