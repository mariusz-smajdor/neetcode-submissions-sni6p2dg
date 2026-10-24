class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i])) {
                const j = map.get(nums[i]);

                if (Math.abs(j - i) <= k) {
                    return true;
                }
            }
            map.set(nums[i], i);
        }

        return false;
    }
}

/*
    loop over nums
    check if hashmap has number that is the same as num[j] and abs(i-j)<=k -> return true

    lets say k is 5
    i is 5
    j is 10
    i-j=8
*/
