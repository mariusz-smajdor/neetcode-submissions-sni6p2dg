class Solution {
    /**
     * @param {string[]} words
     * @return {number}
     */
    countPrefixSuffixPairs(words) {
        // words.sort((a, b) => a.length - b.length);

        let count = 0;

        function isPrefixAndSuffix(w1, w2) {
            if (w2.startsWith(w1) && w2.endsWith(w1)) return true;
            return false;
        }

        for (let i = 0; i < words.length - 1; i++) {
            for (let j = i + 1; j < words.length; j++) {
                if (isPrefixAndSuffix(words[i], words[j])) {
                    count++;
                }
            }
        }

        return count;
    }
}

/*
   ["a", "aa", "aba","ababa"]

    a

*/
