class Solution {
    /**
     * @param {number} columnNumber
     * @return {string}
     */
    convertToTitle(columnNumber) {
        let output = [];

        while (columnNumber-- > 0) {
            output.push(String.fromCharCode((columnNumber % 26) + 65));
            columnNumber = Math.floor(columnNumber / 26);
        }

        return output.reverse().join("");
    }
}
