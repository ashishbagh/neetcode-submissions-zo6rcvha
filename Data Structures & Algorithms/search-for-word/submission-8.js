class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let rows = board.length;
        let cols = board[0].length;
        let dic = [[1,0],[-1,0],[0,1],[0,-1]];
       const dfs=(r,c,i,visit)=>{
        let key=`${r}${c}`;
        if(i===word.length){
            return true;
        }
        if(r<0 || c<0 || r>=rows || c>=cols || visit.has(key) || word[i] !== board[r][c]){
            return false;
        }
        visit.add(key); 
        for(const [dr,dc] of dic){
          if(dfs(r+dr,c+dc,i+1,visit)){
            return true
          };
        }
        visit.delete(key);
        return false;
       }
        for(let r=0;r<rows;r++){
            for(let c=0;c<cols;c++){
                if(board[r][c] === word[0]){
                    if(dfs(r,c,0,new Set())){
                        return true;
                    }
                }
            }
        }

        return false;
    }
}
