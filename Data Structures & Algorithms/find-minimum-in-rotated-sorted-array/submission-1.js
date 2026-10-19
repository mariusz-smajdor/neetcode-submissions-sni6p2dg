class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0,
            r = nums.length - 1;

        while (l < r) {
            const m = l + Math.floor((r - l) / 2);

            if (nums[m] < nums[r]) {
                r = m;
            } else {
                l = m + 1;
            }
        }

        return nums[l];
    }
}

/*
        [7,1,2,3,4,5,6]
        [4,5,6,7,1,2,3]
        [3,4,5,6,7,1,2]
        [2,3,4,5,6,7,1]

        if m is > l and l > r move l to m
        if m is < l and l > r move r to m
                                                           l     m     r
        if mid is smaller than l we must look to the left [7,1,2,3,4,5,6]
                                                           l m r
                                                          [7,1,2,3,4,5,6]
                                                       
                                                          [7,1,2,3,4,5,6]

        if m-1<m<m+1 then go to the left with r pointer - normal bs
        if m-1>m or m>m+1 it means we found the smallest either m or m+1
    */
