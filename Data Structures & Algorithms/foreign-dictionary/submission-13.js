class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        const adj = new Map();

        for (let i = 0; i < words.length; i++) {
            for (let j = 0; j < words[i].length; j++) {
                adj.set(words[i][j], new Set());
            }
        }

        for (let i = 1; i < words.length; i++) {
            const w1 = words[i - 1];
            const w2 = words[i];
            const minLen = Math.min(w1.length, w2.length);

            for (let j = 0; j < minLen; j++) {
                if (w1[j] !== w2[j]) {
                    adj.get(w1[j]).add(w2[j]);
                    break;
                }
            }

            if (w1.length > w2.length && w1.startsWith(w2)) return "";
        }

        const order = [];
        const state = new Map();

        function dfs(l) {
            if (state.get(l) === "IN_PATH") {
                return false;
            }

            if (state.get(l) === "VISITED") {
                return true;
            }

            state.set(l, "IN_PATH");
            for (const next of adj.get(l).values()) {
                if (!dfs(next)) {
                    return false;
                }
            }
            state.set(l, "VISITED");

            order.push(l);
            return true;
        }

        for (const l of adj.keys()) {
            if (state.get(l) !== undefined) {
                continue;
            }

            if (!dfs(l)) {
                return "";
            }
        }

        return order.reverse().join("");
    }
}

/*
    ["hrn","hrf","er","enn","rfnn"]
*/
