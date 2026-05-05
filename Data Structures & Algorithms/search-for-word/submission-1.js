class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let visit = new Set();
    let r = board.length;
    let c = board[0].length;
    const dfs = (row, col, l) => {
      if (l === word.length) return true;
      if (
        row < 0 ||
        col < 0 ||
        row >= r ||
        col >= c ||
        board[row][col] !== word[l] ||
        visit.has(`${row},${col}`)
      ) {
        return false;
      }
      visit.add(`${row},${col}`);
      const res =
        dfs(row + 1, col, l + 1) ||
        dfs(row - 1, col, l + 1) ||
        dfs(row, col + 1, l + 1) ||
        dfs(row, col - 1, l + 1);
      visit.delete(`${row},${col}`);
      return res;
    };
    let l = 0;
    //if (dfs(0, 0, l)) return true;
    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        if(board[i][j] === word[l] && dfs(i, j, l)) return true;
      }
    }
    return false;
    }
}
