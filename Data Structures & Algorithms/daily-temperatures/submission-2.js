class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0)
        const stack = []

        for (let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i]

            while (stack.length && t > stack[stack.length - 1][1]) {
                const idx = stack.pop()[0]
                res[idx] = i - idx
            }

            stack.push([i, t])
        }
        return res
    }
}





