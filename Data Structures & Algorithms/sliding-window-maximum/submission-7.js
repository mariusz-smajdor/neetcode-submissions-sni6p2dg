class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        if (k === 1) return nums
        let max = -Infinity
        let r = 0
        while (r < k) {
            if (nums[r] > max) {
                max = nums[r]
            }
            r++
        }

        const res = [max]
        let l = 1

        while (r < nums.length) {
            if (nums[r] >= max) {
                max = nums[r]
            } else if (nums[l - 1] === max) {
                max = Math.max(...nums.slice(l, r + 1))
                // console.log('@@', nums.slice(l, r + 1))
            }
            res.push(max)
            r++
            l++
        }
        return res  
    }
}
