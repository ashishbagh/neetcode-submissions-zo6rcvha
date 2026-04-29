class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        let row = matrix.length;
        let col = matrix[0].length;
        let left=0;
        let right=(row*col)-1;
        let mid = parseInt((left+right)/2);
        console.log(left,right,mid,);
        while(left<=right){
            let mid = parseInt((left+right)/2);
            let r = Math.floor(mid/col);
            let c = Math.floor(mid%col);
            let val=matrix[r][c];
            console.log(val)
            if(val>target){
                right=mid-1;
            }else if(val<target){
                left=mid+1;
            }else{
                return true
            }
        }

        return false;
    }
}
