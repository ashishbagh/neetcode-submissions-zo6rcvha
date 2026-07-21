class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (!s) {
         return s.length;
        }
        let map = new Map();
        let l=0;
        let r=0;
        let max=1;

        while(r<s.length){
           if(map.has(s[r]) && map.get(s[r])>=l){
                l = map.get(s[r])+1;
           }
           map.set(s[r],r);
           max = Math.max(max,r-l+1);
           r++
        }
        return max;
    }
}
