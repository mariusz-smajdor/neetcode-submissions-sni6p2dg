class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1
        let r = Math.max(...piles)

        let res = r
        while (l <= r) {
            const mid = Math.floor((l + r) / 2)

            let totalHours = 0
            for (const pile of piles) {
                totalHours += Math.ceil(pile / mid)
            }

            if (totalHours > h) {
                l = mid + 1
            } else {
                res = mid
                r = mid - 1
            }
        }

        return res
    }
}
