class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles)

        let res = Infinity
        while (l <= r) {
            const m = Math.floor((l + r) / 2)

            let totalHours = 0
            for (const pile of piles) {
                totalHours += Math.ceil(pile / m)
            }

            if (totalHours > h) {
                l = m + 1
            } else {
                r = m - 1
                res = m
            }
        }
        return res
    }
}