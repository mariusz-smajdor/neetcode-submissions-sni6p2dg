class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const arr = new Array(nums.length).fill(0)

        for (const num of nums) {
            if (arr[num]) return num
            arr[num]++ 
        }

        return -1
    }
}
