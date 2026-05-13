class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = {}

        for (const num of nums) {
            map[num] = (map[num] || 0) + 1
            console.log(map[num])

            if (map[num] >= nums.length / 2) {
                return num
            }
        }
    }
}
