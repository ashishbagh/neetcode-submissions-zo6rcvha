class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (!s) {
         return s.length;
        }
        let map=new Map();

        let r=0;
        let l=0;
        let max=1;
        while(r<s.length){
            if(map.has(s[r])){
                l=map.get(s[r])+1;
                r=l;
                map= new Map();
                map.set(s[l],l);
            }else{
                 map.set(s[r],r);
            }
             max = Math.max(max,map.size);
            r++
        }
        return max;
    }
}
