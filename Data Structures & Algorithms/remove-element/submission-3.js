class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let l = 0;
        let r = nums.length;

        while (l < r) {
            if (nums[l] === val) {
                nums[l] = nums[--r];
            } else {
                l++;
            }
        }

        return r;
    }

    /*
        [10110100]

        [1 .... 0] -> [0 .... 1]
        [00 ... 01] stays
        [001 .. 01] -> [000.. 11]
        [0001 111] ->  [..... 0111]->[00001111]
    
    
    */
}
