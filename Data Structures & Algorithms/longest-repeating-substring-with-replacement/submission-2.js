class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
      let map={};
      let maxF=0;
      let left=0;
      let res=0;
      for(let i=0;i<s.length;i++){
        if(!map[s[i]]){
          map[s[i]]=1;
        }else{
          map[s[i]]+=1;
        }
        maxF = Math.max(maxF,map[s[i]])
        while((i-left+1)- maxF>k){
          map[s[left]]-=1;
          left++;
        }
        res= Math.max(res,i-left+1);
      }

      return res;
    }
}
