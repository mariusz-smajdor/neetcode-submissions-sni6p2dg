class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            if (nums[m] === target) {
                return m;
            }

            if (nums[l] <= nums[m]) {
                // l->m = left side sorted for sure
                if (nums[l] <= target && target <= nums[m]) {
                    r = m;
                } else {
                    l = m + 1;
                }
            } else {
                // m->t = right side is sorted for sure
                if (nums[m] <= target && target <= nums[r]) {
                    l = m;
                } else {
                    r = m - 1;
                }
            }
        }

        return -1;
    }
}

/*
    [4,5,6,7,0,1,2]
    if mid < left and target < left
        go right

*/
