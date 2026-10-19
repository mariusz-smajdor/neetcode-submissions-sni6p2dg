class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        const seen = new Set();
        let result = 0;

        for (const num of numSet.values()) {
            if (!seen.has(num)) {
                let count = 1;
                seen.add(num);

                for (let low = num - 1; numSet.has(low); low--) {
                    count++;
                    seen.add(low);
                }

                for (let high = num + 1; numSet.has(high); high++) {
                    count++;
                    seen.add(high);
                }

                result = Math.max(result, count);
            }
        }

        return result
    }
}
