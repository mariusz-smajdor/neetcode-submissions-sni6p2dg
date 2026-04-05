class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position
            .map((p, i) => [p, (target - p) / speed[i]])
            .sort((a, b) => b[0] - a[0])
        const stack = []
        
        console.log(cars)
        for (const [_, t] of cars) {
            if (stack.length && t <= stack[stack.length - 1]) {
                continue
            }
            stack.push(t)
        }

        return stack.length
    }
}
