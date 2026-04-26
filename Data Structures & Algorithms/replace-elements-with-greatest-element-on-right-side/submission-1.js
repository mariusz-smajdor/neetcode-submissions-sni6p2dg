class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let carry;
        for (let i = arr.length - 1; i >= 0; i--) {
            if (carry === undefined) {
                carry = arr[i]
                arr[i] = -1
            }
            else {
                const tmp = arr[i]
                arr[i] = carry
                carry = Math.max(carry, tmp)
            }
        }
        return arr

    }
}
