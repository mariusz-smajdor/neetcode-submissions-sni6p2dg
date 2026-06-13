class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights) {
        const expected = heights.toSorted((a,b) => a-b)
        let count = 0
        for (let i = 0; i < heights.length; i++) {
            if (expected[i] !== heights[i]) {
                count++
            }
        }
        return count
    }
}
