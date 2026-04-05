class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const n = board.length
        const rows = new Map()
        const cols = new Map()
        const squares = new Map()

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                const currentField = board[r][c]
                if (currentField === '.') continue;

                if (!rows.get(r)) rows.set(r, new Set())
                if (!cols.get(c)) cols.set(c, new Set())
                const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`
                if (!squares.get(squareKey)) squares.set(squareKey, new Set())

                const currentRow = rows.get(r)
                const currentCol = cols.get(c)
                const currentSquare = squares.get(squareKey)
                if (currentRow.has(currentField) || currentCol.has(currentField) || currentSquare.has(currentField)) {
                    return false
                }

                currentRow.add(currentField)
                currentCol.add(currentField)
                currentSquare.add(currentField)
            }
        }

        return true
    }
}