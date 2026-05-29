class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        const map = {}

        for (const num of nums) {
            map[num] = num
        }

        const ret = []
        for (let i = 1; i <= nums.length; i++) {
            if (!map[i]) {
                ret.push(i)
            }
        }

        return ret
    }
}
