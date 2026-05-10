class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxLen = 0
        let currMaxLen = 0

        for (const num of nums) {
            if (num === 1) {
                currMaxLen++
                maxLen = Math.max(maxLen, currMaxLen)
            } else {
                currMaxLen = 0
            }
        }

        return maxLen
    }
}
