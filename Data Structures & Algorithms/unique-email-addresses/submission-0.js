class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        const set = new Set()

        for (const email of emails) {
            const plusIdx = email.indexOf('+')
            const atIdx = email.indexOf('@')
            const toCheck = email.slice(0, plusIdx !== -1 ? plusIdx : atIdx)
            set.add(toCheck.split('').filter(ch => ch !== '.').join('') + email.slice(atIdx))
        }

        return set.size
    }
}
