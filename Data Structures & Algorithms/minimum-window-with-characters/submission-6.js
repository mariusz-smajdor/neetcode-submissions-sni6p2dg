class Solution {
    minWindow(s, t) {
        if (t.length > s.length) return ''

        const sCount = new Map()
        const tCount = new Map()

        for (let c of t) {
            tCount.set(c, (tCount.get(c) || 0) + 1)
        }

        let result = [0, 0, Infinity]
        const need = tCount.size
        let have = 0

        let l = 0

        for (let r = 0; r < s.length; r++) {
            const c = s[r]
            sCount.set(c, (sCount.get(c) || 0) + 1)

            if (tCount.has(c) && sCount.get(c) === tCount.get(c)) {
                have++
            }

            while (have === need) {
                if (result[2] > r - l + 1) {
                    result = [l, r, r - l + 1]
                }

                const left = s[l]
                sCount.set(left, sCount.get(left) - 1)

                if (tCount.has(left) && sCount.get(left) < tCount.get(left)) {
                    have--
                }

                l++
            }
        }

        return result[2] === Infinity ? '' : s.slice(result[0], result[1] + 1)
    }
}