class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let res = 0;

        for (let i = 0; i < heights.length; i++) {
            const currHeight = heights[i]
            let area = currHeight
            for (let j = i - 1; j >= 0 && heights[j] >= currHeight; j--) {
                area += currHeight
            }

            for (let k = i + 1; k < heights.length && heights[k] >= currHeight; k++) {
                area += currHeight
            }

            res = Math.max(res, area)
        }
        return res
    }
}
