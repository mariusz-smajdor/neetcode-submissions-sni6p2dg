class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position
            .map((p, i) => [p, speed[i]])
            .sort((a, b) => b[0] - a[0])
            .map((c) => (target - c[0]) / c[1]);

        let fleets = 1;
        for (let i = 1; i < cars.length; i++) {
            if (cars[i] > cars[i - 1]) {
                fleets++;
            } else {
                cars[i] = cars[i - 1];
            }
        }

        return fleets;
    }
}
