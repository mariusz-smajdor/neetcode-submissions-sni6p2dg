class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0,
            r = height.length - 1
        let result = 0
        let maxLeft = height[l]
        let maxRight = height[r]

        while (l < r) {
            if (height[l] < height[r]) {
                result += maxLeft - height[l] 
                l++
                maxLeft = Math.max(maxLeft, height[l])
            } else {
                result += maxRight - height[r] 
                r--
                maxRight = Math.max(maxRight, height[r])
            }
        }

        return result
    }
}
