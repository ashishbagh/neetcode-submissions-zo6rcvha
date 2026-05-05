class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      let map= new Map();
      for(const str of s){
        map.set(str, (map.get(str)||0)+1);
      }

      for(const str of t){
        if(!map.has(str)) return false;
        let val = map.get(str);
        if(val===0) return false;
        if(val>1) map.set(str,val-1);
        if(val-1===0) map.delete(str);
      }
      return map.size===0;
    }
}
