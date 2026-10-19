class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let string = "";

        for (const str of strs) {
            string += `${str.length}#${str}`;
        }

        return string;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strings = [];

        let i = 0;
        while (i < str.length) {
            const string = [];

            let len = 0;
            while (this.isDigit(str[i])) {
                len = len * 10 + Number(str[i++]);
            }
            i++;
            while (len-- > 0) {
                string.push(str[i++]);
            }

            strings.push(string.join(""));
        }

        return strings;
    }

    isDigit(ch) {
        return ch >= 0 && ch <= 9;
    }
}
