class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        return details.filter(detail => +detail.slice(11, 13) > 60).length
    }
}
