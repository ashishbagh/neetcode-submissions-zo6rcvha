class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
      let map = {};
      for(let i=0;i<S.length;i++){
            map[S[i]] = i;
      }
      let result = [];
      let end =0;
      let start=0
       
       for(let i=0;i<S.length;i++){
        end = Math.max(end,map[S[i]]);
        if(end===i){
            result.push(end-start+1);
            start=i+1;
        }
       }
        return result;
    }
}
