class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {

      let result=[];
      const memo = new Set();
      const backtrack = (currStr)=>{
        if(result.length>0) return;
        if(currStr === s)result.push(s);
        if(currStr.length>=s.length) return;
        if(memo.has(currStr)) return;
        if (!s.startsWith(currStr)) return; 

        for(let i=0;i<wordDict.length;i++){
          let temp = currStr
          temp+=wordDict[i];
          if(temp.length>s.length) continue;
          backtrack(temp);
        }
        memo.add(currStr);
        return
      }
     
      backtrack("",0);
      console.log(result);
      return result.length>0;
    }
}
