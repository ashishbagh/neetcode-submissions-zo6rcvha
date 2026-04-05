class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
      matrix =  matrix.reverse();
       console.log(matrix);
        for(let i=0;i<matrix.length;i++){
          for(let j=i;j<matrix[0].length;j++){
            console.log(matrix[i][j],matrix[j][i]);
             [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]];
        }
        }

        return matrix
    }
}
