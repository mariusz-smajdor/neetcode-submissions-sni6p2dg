/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let min = 1;
        let max = n;

        while (min <= max) {
            const mid = Math.floor((min + max) / 2);
            const result = guess(mid);

            if (result === 0) {
                return mid;
            } else if (result === -1) {
                max = mid - 1;
            } else {
                min = mid + 1;
            }
        }

        return -1;
    }
}
