class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */

    findMedianSortedArrays(nums1, nums2) {
        let a = nums1
        let b = nums2
        if (a.length > b.length) {
            a = nums2
            b = nums1
        }

        const m = a.length + b.length
        const n = Math.ceil(m / 2)

        let l = 0
        let r = a.length - 1
        while (true) {
            const ma = Math.floor((l + r) / 2)
            const mb = n - ma - 2

            const la = ma >= 0 ? a[ma] : -Infinity
            const ra = ma + 1 < a.length ? a[ma + 1] : Infinity
            const lb = mb >= 0 ? b[mb] : -Infinity
            const rb = mb + 1 < b.length ? b[mb + 1] : Infinity

            if (la <= rb && lb <= ra) {
                if (m % 2) {
                    return Math.max(la, lb)
                }
                return (Math.max(la, lb) + Math.min(ra, rb)) / 2
            }

            if (la > rb) {
                r = ma - 1
            } else {
                l = ma + 1
            }
        }
    }
}
