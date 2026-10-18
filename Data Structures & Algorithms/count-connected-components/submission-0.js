class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adj = {};
        for (let i = 0; i < n; i++) adj[i] = new Set();
        for (const [a, b] of edges) {
            adj[a].add(b);
            adj[b].add(a);
        }

        const visited = new Set();
        function dfs(i) {
            if (visited.has(i)) return;
            visited.add(i);

            for (const v of adj[i]) {
                dfs(v);
            }

            delete adj[i];
        }

        let count = 0;
        for (let i = 0; i < n; i++) {
            if (adj[i]) {
                dfs(i);
                count++;
            }
        }
        return count;
    }
}
