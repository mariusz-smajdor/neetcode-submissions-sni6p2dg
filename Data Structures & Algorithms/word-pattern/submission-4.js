class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {
        const patternArr = pattern.split('')
        const sArr = s.split(' ')

        console.log(patternArr, sArr)
        if (patternArr.length !== sArr.length) {
            return false
        }

        const map = {}
        const used = []
        for (let i = 0; i < sArr.length; i++) {
            console.log(map)
            if (!map[patternArr[i]]) {
                if (used.includes(sArr[i])) return false
                map[patternArr[i]] = sArr[i]
                used.push(sArr[i])
            } else if (map[patternArr[i]] !== sArr[i]) {
                console.log(map)
                return false
            }
        }

        console.log(map)
        return true
    }
}
