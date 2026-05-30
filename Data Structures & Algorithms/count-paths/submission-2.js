class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
      let cache = {};
      const dfs = (r,c)=>{
        let key = `${r},${c}`;
        if(cache[key]) return cache[key];
        if(r>m || c>n){
            return 0;
        }
        if(r===m-1 && c===n-1){
            return 1;
        }

        cache[key] = dfs(r+1,c)+dfs(r,c+1);
       return cache[key];
      }
      return dfs(0,0); 
    }
}
