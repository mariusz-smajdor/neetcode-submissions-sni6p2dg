class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramMap = new Map();

        for (const str of strs) {
            const key = str.split("").sort().join("");

            if (!anagramMap.has(key)) {
                anagramMap.set(key, []);
            }

            anagramMap.get(key).push(str);
        }

        const anagramGroups = [];

        for (const anagrams of anagramMap.values()) {
            const group = [];
            for (const anagram of anagrams) {
                group.push(anagram);
            }
            anagramGroups.push(group);
        }

        return anagramGroups;
    }
}
