class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
      let rows = matrix.length;
      let cols = matrix[0].length;
      let visited = new Set();

      const dirty = (r,c)=>{
        visited.add(`{${r},${c}}`);
        for(let i=0;i<rows;i++){
          if(matrix[i][c]===0) continue;
          matrix[i][c] = 0;
          visited.add(`{${i},${c}}`);
        }

        for(let j=0;j<cols;j++){
          if( matrix[r][j]===0) continue;
          matrix[r][j] = 0;
          visited.add(`{${r},${j}}`);
        }

      }

      for(let r=0;r<rows;r++){
        for(let c=0;c<cols;c++){
          if(matrix[r][c] === 0 && !visited.has(`{${r},${c}}`)){
              dirty(r,c);
          }
        }
      }
      return matrix;
      
    }
}
