class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
      let result = [];

      for(let mat of matrix){
        result = [...result,...mat];
      }

      let right= result.length-1;
      let left = 0;

      while(left<=right){
        let mid =  parseInt((left+right)/2);
        if(result[mid]>target){
            right = mid-1;
        }else if(result[mid]<target){
            left = mid+1
        }else{
          return true
        }
        
       }

    return false
    }


}
