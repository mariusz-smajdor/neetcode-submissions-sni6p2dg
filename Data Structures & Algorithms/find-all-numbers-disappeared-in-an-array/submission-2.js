class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        const arr = new Array(nums.length).fill(0)

        for (const num of nums) {
            arr[num - 1]++
        }

        const ret = []
        for (let i = 0; i < arr.length; i++) {
            if (!arr[i]) {
                ret.push(i + 1)
            }
        }

        return ret
    }
}
