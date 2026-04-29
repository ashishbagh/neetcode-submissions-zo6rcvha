class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
      let left=1;
      let right=Math.max(...piles);

      const speed = (c)=>{
        let res=0;
        for(const pile of piles){
            res+=Math.ceil(pile/c);
        }
        return res<=h;
      }
     let result=Infinity;
      while(left<=right){
         let mid = parseInt((left+right)/2);
        if(speed(mid)){
            result=Math.min(result,mid);
            right=mid-1;
        }else{
            left=mid+1;
        }
      }
      return result;
    }
}
