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
       for(var i=0;i<S.length;i++){
         end = Math.max(end,map[S[i]]);
         if(i===end){
            result.push(end-start+1);
            start = i+1;
         }
       }
        return result;
    }
}
