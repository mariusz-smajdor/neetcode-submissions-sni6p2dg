class Solution {
    /**
     * @param {number[]} rating
     * @return {number}
     */
    numTeams(rating) {
        const n = rating.length;
        const map = new Map();
        let triplets = 0;

        for (let l = 0; l < n - 2; l++) {
            const left = rating[l];

            for (let r = l + 1; r < n - 1; r++) {
                const right = rating[r];

                if (!map.has(r)) {
                    const orders = [0, 0];

                    for (let i = r + 1; i < n; i++) {
                        orders[right < rating[i] ? 1 : 0]++;
                    }

                    map.set(r, orders);
                }

                triplets += map.get(r)[left < right ? 1 : 0];
            }
        }

        return triplets;
    }
}

/*

    [1,4,2,3]

    left pointer: 1
    right pointer: 4
    we are looking for increases, for index 2 (4)
*/
