class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {

        let max = 0
        let cache = {};
        let res = 0;
      //  let len = Math.min(text1.length,text2.length);
        const dfs = (i,j)=>{
            let key=`${i},${j}`;
            if(i===text1.length || j===text2.length) return 0;
            if(cache[key]) return cache[key];
            if(text1[i] === text2[j]){
              res = 1+dfs(i+1,j+1);
            }else{
                res=Math.max(dfs(i+1,j),dfs(i,j+1));
            }

            cache[key] = res;
           return cache[key];
        }

        dfs(0,0);
        return res;
    }
}
