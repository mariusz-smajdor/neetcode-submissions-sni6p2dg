class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const n = heights.length - 1
        let l = 0, r = n
        let max = 0

        while (l < r) {
            max = Math.max(max, Math.min(heights[l], heights[r]) * (r - l))
            if (heights[l] < heights[r]) l++
            else r--
        }

        return max
    }
}
