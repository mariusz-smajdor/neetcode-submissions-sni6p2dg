class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let result = 0;

        for (const num of numSet.values()) {
            if (!numSet.has(num - 1)) {
                let count = 1;
                let curr = num;

                while (numSet.has(curr + 1)) {
                    count++;
                    curr++;
                }

                result = Math.max(result, count);
            }
        }

        return result;
    }
}
