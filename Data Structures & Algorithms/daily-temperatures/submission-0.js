class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0)
        const stack = []

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length && temperatures[i] > stack[stack.length - 1][0]) {
                const [t, tId] = stack.pop()
                res[tId] = i - tId 
            }

            stack.push([temperatures[i], i])
        }

        return res
    }
}





