class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        /*
            [[1,4],[2,4],[3,1],[3,2]]
            1:{4}
            2:{4}
            3:{1 2}
            4:{}

            1-4good2-4good3-1good
        */
        const graph = new Map();
        for (let i = 0; i < numCourses; i++) {
            graph.set(i, new Set());
        }

        for (const [a, b] of prerequisites) {
            graph.get(a).add(b);
        }

        const visited = new Map();

        function dfs(c) {
            if (visited.has(c) && visited.get(c)) {
                return false;
            }

            visited.set(c, true);
            for (const course of graph.get(c)) {
                if (visited.has(course) && visited.get(course) === false) continue;
                if (!dfs(course)) return false;
            }
            visited.set(c, false);

            return true;
        }

        for (const c of graph.keys()) {
            if (!dfs(c)) {
                return false;
            }
        }

        return true;
    }
}
