class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        if(s1.length+s2.length !== s3.length) return false
        let cache = new Map();
        const dfs=(l,r)=>{
            let key= `${l},${r}`;
            let ans=false;
            let i = l+r;
            if(i>s3.length) return true;
            if(cache.has(key)) return cache.get(key);
            if(s3[i] === s1[l] && s3[i] === s2[r]){
                ans = dfs(l+1,r) || dfs(l,r+1);
            }else if(s3[i] === s2[r]){
                ans = dfs(l,r+1);
            }else if(s3[i] === s1[l]){
                ans = dfs(l+1,r)
            }
            cache.set(key,ans);
            return ans;
        }


        return dfs(0,0);
        

        
    }
}
