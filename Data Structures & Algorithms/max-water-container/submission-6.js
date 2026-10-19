class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let result = 0;

        let l = 0;
        let r = heights.length - 1;
        while (l < r) {
            const distance = r - l;
            let smallerBar = Math.min(heights[l], heights[r]);

            result = Math.max(distance * smallerBar, result);
            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return result;
    }
}
