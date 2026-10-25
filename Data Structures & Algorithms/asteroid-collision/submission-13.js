class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];

        for (let i = 0; i < asteroids.length; i++) {
            const a = asteroids[i];

            while (
                stack.length &&
                stack[stack.length - 1] > 0 &&
                a < 0 &&
                -a > stack[stack.length - 1]
            ) {
                stack.pop();
            }

            if (a < 0 && -a === stack[stack.length - 1]) {
                stack.pop();
            } else if (a > 0 || !stack.length || stack[stack.length - 1] < 0) {
                stack.push(a);
            }
        }

        return stack;
    }
}
