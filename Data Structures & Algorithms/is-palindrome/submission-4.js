class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9'))
    }

    isPalindrome(s) {
        let str = ''
        for (let l of s) {
            if (this.isAlphanumeric(l)) {
                str += l.toLowerCase()
            }
        }

        return str === str.split('').reverse('').join('')
    }
}
