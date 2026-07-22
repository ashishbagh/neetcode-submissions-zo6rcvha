class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let words = new Set(wordDict);
        let memo = new Map();
        const bt = (str)=>{
            if(memo.has(str)){
              return memo.get(str)
            };
            if(str.length>s || !s.startsWith(str)){
               return false
            };
            if(str === s){
              return true
            };
            for(const word of words){
               if(bt(str+word)){
                 memo.set(str,true);
                 return true;
               }
            }
             memo.set(str,false);
            return false;
        }

        return bt("");
    }
}
