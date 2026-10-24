class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */
    minOperations(logs) {
        let count = 0;

        for (const log of logs) {
            if (log === "./") {
                continue;
            } else if (log === "../") {
                if (count > 0) {
                    count--;
                }
            } else {
                count++;
            }
        }

        return count;
    }
}
