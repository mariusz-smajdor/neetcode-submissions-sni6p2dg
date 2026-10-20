class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let min = 1;
        let max = Math.max(...piles);
        let res = max;

        while (min <= max) {
            const mid = min + Math.floor((max - min) / 2);
            const time = piles.reduce((a, b) => a + Math.ceil(b / mid), 0);

            if (time <= h) {
                max = mid - 1;
                res = mid;
            } else {
                min = mid + 1;
            }
        }

        return res;
    }
}
