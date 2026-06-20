class Solution {
    /**
     * @param {number} rowIndex
     * @return {number[]}
     */
    getRow(rowIndex) {
        let res = [1]
        for (let i = 0; i < rowIndex; i++) {
            const tmp = new Array(res.length + 1).fill(0)
            console.log(tmp)
            for (let j = 0; j < res.length; j++) {
                console.log(res[i])
                tmp[j] += res[j]
                tmp[j+1] += res[j] 
            }
            console.log(tmp)
            console.log()
            res = tmp
        }
        return res
    }
}
