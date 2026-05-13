class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(f, n) {
        const m = f.length
        let res = 0

        for (let i = 0; i < m; i++) {
            let count = i === 0 ? 1 : 0
            while (f[i] === 0) {
                count++
                i++
            }
            if (i === m) count++
            res += Math.max(0, Math.floor((count - 1) / 2))
        }
        return res >= n
    }
}
