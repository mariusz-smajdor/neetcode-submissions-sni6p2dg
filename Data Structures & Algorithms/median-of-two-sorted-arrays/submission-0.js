class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1
        let B = nums2
        if (nums1.length > nums2.length) {
            A = nums2
            B = nums1
        }

        const totalLength = A.length + B.length
        const halfLength = Math.floor((totalLength + 1) / 2)
        let l = 0
        let r = A.length - 1

        while (true) {
            const mA = Math.floor((l + r) / 2)
            const mB = halfLength - mA - 2

            const AL = mA >= 0 ? A[mA] : -Infinity
            const AR = mA + 1 < A.length ? A[mA + 1] : Infinity
            const BL = mB >= 0 ? B[mB] : -Infinity
            const BR = mB + 1 < B.length ? B[mB + 1] : Infinity

            if (AL <= BR && BL <= AR) {
                if (totalLength % 2 === 1) {
                    return Math.max(AL, BL)
                }
                return (Math.max(AL, BL) + Math.min(AR, BR)) / 2
            } else if (AL > BR) {
                r = mA - 1
            } else {
                l = mA + 1
            }
        }

    }
}