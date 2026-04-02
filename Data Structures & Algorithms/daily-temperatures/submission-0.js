class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
      
      let res =[];
      let right=1;

      for(let i=0;i<temperatures.length;i++){
        right=i+1;
        res[i]=0;
        while(right<temperatures.length){
          if(temperatures[i]<temperatures[right]){
            res[i]=right-i;
            break;
          }
          right++
        }
      }
      
      return res;

    }
}
