class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        const wordsSet = new Set()

        for (let i = 0; i < words.length - 1; i++) {
            if (wordsSet.has(words[i]))
                continue

            for (let j = i + 1; j < words.length; j++) {

                if (words[i].includes(words[j]))
                    wordsSet.add(words[j])
                if (words[j].includes(words[i]))
                    wordsSet.add(words[i])

            }
        }

        return wordsSet
    }
}
