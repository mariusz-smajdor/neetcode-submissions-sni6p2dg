class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {
        const charsOrders = new Map();

        for (let i = 0; i < order.length; i++) {
            charsOrders.set(order[i], i);
        }

        for (let i = 1; i < words.length; i++) {
            const w1 = words[i - 1];
            const w2 = words[i];

            const minLen = Math.min(w1.length, w2.length);

            for (let j = 0; j < minLen; j++) {
                if (w1[j] !== w2[j]) {
                    if (charsOrders.get(w1[j]) > charsOrders.get(w2[j])) {
                        console.log(w1, w2, j);
                        return false;
                    }
                    break;
                }
                if (j === minLen - 1 && w1.length > w2.length) return false;
            }
        }

        return true;
    }
}
