class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
      
      const cols= new Set();
      const posD = new Set(); // r+c
      const negD = new Set(); // r-c

      const board = Array.from({length:n},()=> Array(n).fill("."));

      let result=[];
      const back = (r)=>{
        if(r === n){
            result.push(board.map((row)=>row.join('')))
            return;
        }
        for(let c=0;c<n;c++){
          if(cols.has(c) || negD.has(r-c) || posD.has(r+c)) continue;
          cols.add(c);
          negD.add(r-c);
          posD.add(r+c);
          board[r][c] = "Q";
          back(r+1);
          cols.delete(c);
          negD.delete(r-c);
          posD.delete(r+c);
          board[r][c] = "."
        }
        return;
      }

      back(0)
      
      return result;
        
    }
}
