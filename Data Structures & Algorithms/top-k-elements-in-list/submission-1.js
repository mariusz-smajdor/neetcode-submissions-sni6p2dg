class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const n = nums.length;
        const buckets = Array.from({ length: n }, () => new Set());
        const frequencies = new Map();

        for (let num of nums) {
            if (!frequencies.has(num)) {
                frequencies.set(num, 1);
                buckets[0].add(num);
            } else {
                const count = frequencies.get(num);
                frequencies.set(num, count + 1);
                buckets[count - 1].delete(num);
                buckets[count].add(num);
            }
        }

        const output = [];

        for (let i = n - 1; i >= 0; i--) {
            if (buckets[i].size === 0) continue;
            else {
                for (const num of buckets[i].values()) {
                    output.push(num);
                    if (output.length === k) {
                        return output;
                    }
                }
            }
        }

        return output;
    }
}
