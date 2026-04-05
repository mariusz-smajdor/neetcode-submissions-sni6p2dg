class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        if (k === 1) return nums

        const n = nums.length
        const res = new Array(n - k + 1)
        const q = new Deque()
        let l = 0, r = 0

        while (r < n) {
            while (q.size() && nums[q.back()] < nums[r]) {
                q.popBack()
            }
            q.pushBack(r)

            if (l > q.front()) {
                q.popFront()
            }

            if (r + 1 >= k) {
                res[l] = nums[q.front()]
                l++
            }
            r++
        }

        return res
    }
}
