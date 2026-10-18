class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    findChampion(n, edges) {
        //  [[2,0],[0,1],[2,3]]
        /*  winners: { 2 0 3 1 }
            2 : { 0, 3 }
            0 : { 1 }
        */
        // [f f t f]
        if (n === 1) return 0;
        const candidates = new Array(n).fill(null);

        for (let i = 0; i < edges.length; i++) {
            const [w, l] = edges[i];
            if (candidates[w] === null) candidates[w] = true;
            candidates[l] = false;
        }

        let champion = -1;
        for (let i = 0; i < candidates.length; i++) {
            if (candidates[i] === null) return -1;
            if (candidates[i] === true) {
                if (champion !== -1) return -1;
                champion = i;
            }
        }

        return champion;
    }
}
