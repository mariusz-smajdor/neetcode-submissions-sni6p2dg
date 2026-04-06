class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const n = arr.length
        const ans = new Array(n)
        let maxRight = -1
        for (let i = n - 1; i >= 0; i--) {
            ans[i] = maxRight
            maxRight = Math.max(maxRight, arr[i])
        }

        return ans
    }
}
