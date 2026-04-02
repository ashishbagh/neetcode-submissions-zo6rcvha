class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, n) {
      let result = [];
      let set = new Set();
      candidates = candidates.sort((a,b)=>a-b);

      const dfs = (target,left,res)=>{
        if (target === n) {
        // if(set.has([...res].join(''))) return;
         result.push([...res]);
        // set.add([...res].join(''));
         return 1;
        }
        if (target > n) return 0;
        if (left >= candidates.length) return 0;

        for(let i=left;i<candidates.length;i++){
           if (i > left && candidates[i] === candidates[i - 1]) {
                    continue;
              }
        
          res.push(candidates[i]);
          dfs(target+candidates[i],i+1,res);
          res.pop();
        }

        return;
      }

      dfs(0,0,[]);

      return result;
    }
}
