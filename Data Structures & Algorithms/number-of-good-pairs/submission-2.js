class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums) {
        const map = {}

        for (const num of nums) {
            if (!map[num] && map[num] !== 0) {
                map[num] = [0, 1]
            } else {
                map[num][0] = map[num][0] + map[num][1]
                map[num][1]++
            }
        }

        return (Object.values(map).reduce((acc, curr) => acc + curr[0], 0))
    }
}
