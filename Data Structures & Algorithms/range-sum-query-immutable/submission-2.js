class NumArray {
    nums
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.nums = nums
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        return this.nums.slice(left, right + 1).reduce((acc, curr) => acc + curr, 0)
    }
}
