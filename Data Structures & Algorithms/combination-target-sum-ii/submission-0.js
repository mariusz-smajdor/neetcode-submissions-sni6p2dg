class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);
        const n = candidates.length;

        const out = [];
        const stack = [];
        let sum = 0;

        function dfs(start) {
            if (sum === target) {
                return out.push([...stack]);
            }

            if (sum > target || start === n) {
                return;
            }

            const candidate = candidates[start];
            sum += candidate;
            stack.push(candidate);
            dfs(start + 1);
            stack.pop();
            sum -= candidate;

            while (start + 1 < n && candidates[start] === candidates[start + 1]) {
                start++;
            }
            dfs(start + 1);
        }

        dfs(0);

        return out;
    }
}

/*
    [9,2,2,4,6,1,5] 8

    9 -> N
    2 -> 2 -> 4 -> Y
         2 -> 6 -> N
         2 -> 1 -> 5 -> N
    2 -> 4 -> 6 -> N
         4 -> 1 -> 




















*/
