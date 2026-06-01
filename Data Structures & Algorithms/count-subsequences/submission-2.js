class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        let cache= new Map();
        const dfs=(i,j)=>{
            let key = `${i},${j}`;
            if(cache.has(key)) return cache.get(key);
            if(j===t.length){
                return 1;
            }
             if (i === s.length) return 0;
          
          let ways=0;
            if (s[i] === t[j]) {
              ways = dfs(i + 1, j + 1) + dfs(i + 1, j);
            } else {
                ways = dfs(i + 1, j);
            }
          cache.set(key,ways);
          return ways;
        }
        
        return dfs(0,0);
    }
}
