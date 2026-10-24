class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        let result = Infinity;

        let white = 0;
        let black = 0;

        let l = 0;
        for (let r = 0; r < blocks.length; r++) {
            if (blocks[r] === "W") {
                white++;
            } else {
                black++;
            }

            if (r - l + 1 === k) {
                result = Math.min(white, result);

                if (blocks[l++] === "W") {
                    white--;
                } else {
                    black++;
                }
            }
        }

        return result;
    }
}

/*
    while r < n
        increment block value

        if sum ob two blocks is k
            save min block as potential result 
            decrement block l from count and l++
*/
