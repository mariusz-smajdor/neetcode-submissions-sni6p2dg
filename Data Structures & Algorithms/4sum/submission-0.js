class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        nums.sort((a, b) => a - b);

        const n = nums.length;
        const output = new Set();

        for (let i = 0; i < n - 3; i++) {
            for (let j = i + 1; j < n - 2; j++) {
                let l = j + 1;
                let r = n - 1;

                while (l < r) {
                    const sum = nums[i] + nums[j] + nums[l] + nums[r];

                    if (sum === target) {
                        output.add(`${nums[i]},${nums[j]},${nums[l]},${nums[r]}`);

                        while (l < r && nums[++l] === nums[l - 1]);
                        while (l < r && nums[--r] === nums[r + 1]);
                    }

                    if (sum < target) {
                        l++;
                    } else if (sum > target) {
                        r--;
                    }
                }
            }
        }

        const ret = [];
        for (const val of output.values()) {
            ret.push(val.split(","));
        }
        return ret;
    }
}
