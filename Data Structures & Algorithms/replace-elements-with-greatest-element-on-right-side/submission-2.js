class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let n = arr.length - 1
        let carry = arr[n];
        arr[n] = -1

        while (--n >= 0) {
            let tmp = arr[n]
            arr[n] = carry
            carry = Math.max(carry, tmp)
        }

        return arr
    }
}
