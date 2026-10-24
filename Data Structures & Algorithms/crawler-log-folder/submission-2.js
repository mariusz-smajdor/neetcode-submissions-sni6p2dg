class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */
    minOperations(logs) {
        let count = 0;

        for (const log of logs) {
            if (log === "../") {
                if (count > 0) {
                    count--;
                }
            } else if (log !== "./") {
                count++;
            }
        }

        return count;
    }
}
