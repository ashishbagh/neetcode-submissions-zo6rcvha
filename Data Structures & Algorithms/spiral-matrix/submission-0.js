class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        if (!matrix.length || !matrix[0].length) return [];

        const result =[];
        let top=0;
        let left=0;
        let right=matrix[0].length-1;
        let bottom=matrix.length-1;

        while(top<=bottom && left<=right){
          for(let c=left;c<=right;c++){
             result.push(matrix[top][c]);
          }
          top++;
          for(let r=top;r<=bottom;r++){
             result.push(matrix[r][right]);
          }
          right--;
          if(top<=bottom){
            for(let col=right;col>=left;col--){
                 result.push(matrix[bottom][col]);
            }
            bottom--
          }

          if(left<=right){
            for(let row=bottom;row>=top;row--){
                 result.push(matrix[row][left]);
            }
            left++;
          }

        }

        return result;
    }
}
