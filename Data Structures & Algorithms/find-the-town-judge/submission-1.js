class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        /*
            trusters = Frequency array of ppl that trust somebody
            trusted = map<person, {people who trust that person}> 
        */
        const trustCounts = new Array(n).fill(0);
        const trustedMap = new Map();

        for (let i = 0; i < trust.length; i++) {
            trustCounts[trust[i][0] - 1]++;
            trustedMap.set(
                trust[i][1],
                (trustedMap.get(trust[i][1]) || new Set()).add(trust[i][0]),
            );
        }

        for (let i = 0; i < n; i++) {
            if (trustCounts[i] === 0 && trustedMap.get(i + 1)?.size === n - 1) {
                return i + 1;
            }
        }

        return -1;
    }
}
