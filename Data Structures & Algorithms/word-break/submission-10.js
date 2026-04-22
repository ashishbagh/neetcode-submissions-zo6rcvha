class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let words = new Set(wordDict);
        let memo = new Set();
        const bt = (curr)=>{
            if(curr === s){
                memo.add(curr);
                return true;
            }
            if(!s.startsWith(curr)) return false;
            if(memo.has(curr)) return  false;
            if(curr.length>s.length) return false;
            for(const word of words){
                 if(bt(curr+word)) return true
            }
            memo.add(curr);
            return false;
        }
       return bt("");
    }
}
