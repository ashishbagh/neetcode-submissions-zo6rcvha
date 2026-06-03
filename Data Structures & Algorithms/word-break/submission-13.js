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
            if(memo.has(str)) return memo.get(str);
            if(str === s) return true;
            if(str.length>s.length) return false;

            if(!s.startsWith(str)) return false;

            for(const curr of words){
                if(bt(str+curr)){
                    memo.set(str+curr,true);
                    return true;
                }
            }
            memo.set(str,false);
            return false
        }

        return bt("");
    }
}
