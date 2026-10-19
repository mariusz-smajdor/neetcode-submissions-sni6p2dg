class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const output = new Array(n).fill(1);

        let suffix = 1;
        for (let i = n - 1; i >= 0; i--) {
            output[i] *= suffix;
            suffix *= nums[i];
        }

        let prefix = 1;
        for (let i = 0; i < n; i++) {
            output[i] *= prefix;
            prefix *= nums[i];
        }

        return output;
    }
}

/*
    [1,2,4,6]
    [1,1,1,1] 48

    [48,24,6,1]    

  8 [48,24,6,1] 
    [48,24,12,8]  
*/
