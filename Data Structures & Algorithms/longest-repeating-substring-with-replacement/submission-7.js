class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l=0;
        let r=0;
        let map = new Map();
        let maxF=0;
        let max=-Infinity;
        while(r<s.length){
            if(!map.has(s[r])){
                map.set(s[r],1);
            }else{
                map.set(s[r],map.get(s[r])+1);
            }

           maxF = Math.max(maxF,map.get(s[r]));
           while((r-l+1)-maxF>k){
                map.set(s[l],map.get(s[l])-1);
                l++;
           }
           
           max = Math.max(r-l+1,max);
           r++;
        }

        return max
    }
}
