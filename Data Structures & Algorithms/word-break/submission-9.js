class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let words = new Set(wordDict);
        let results=[];
        let memo = new Set();
        const bt = (curr)=>{
            if(curr === s){
                results.push(curr)
                return;
            }
            if(!s.startsWith(curr)) return;
            if(memo.has(curr)) return;
            if(curr.length>s.length) return;
            for(const word of words){
                bt(curr+word);
            }
            memo.add(curr);
            return;
        }
        bt("");
        console.log(results);
        return results.length>0;
    }
}
