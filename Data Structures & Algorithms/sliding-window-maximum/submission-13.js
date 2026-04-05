class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        if (k === 1) return nums

        const n = nums.length
        const res = []
        const q = []
        let l = 0, r = 0

        while (r < n) {
            while (q.length && nums[q[q.length - 1]] < nums[r]) {
                q.pop()
            }
            q.push(r)

            if (l > q[0]) {
                q.shift()
            }

            if (r + 1 >= k) {
                res.push(nums[q[0]])
                l++
            }
            r++
        }

        return res
    }
}
