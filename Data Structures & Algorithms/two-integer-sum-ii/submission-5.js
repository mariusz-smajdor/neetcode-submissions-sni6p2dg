class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0,
            r = numbers.length - 1

        while (l < r) {
            if (numbers[l] + numbers[r] < target) {
                l++
            } else if (numbers[l] + numbers[r] > target) {
                r--
            } else {
                return [l + 1, r + 1]
            }
        }
        
        return []
    }
}
