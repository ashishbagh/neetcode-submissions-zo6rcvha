class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        
      let right=Math.max(...piles);
      let left=1;
      let res=right;

      while(left<=right){
         let mid = parseInt((left+right)/2);
         let count=0;
         for(let i=0;i<piles.length;i++){
          count= count + Math.ceil(piles[i]/mid);
         }
         
         if(count<=h){
          res = Math.min(res,mid);
          right=mid-1;
         }else{
          left=mid+1;
         }
      }

     return res;
    }
}
