class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const pre=prerequisites;
        let adj={};
        for(let i=0;i<numCourses;i++){
            adj[i]=[];
        }
        for(const [v,m] of pre){
            adj[v].push(m);
        }

        let memo={};
    
        const dfs=(node,visit)=>{
          if(memo[node]) return memo[node];
          if(visit.has(node)) return false;
          const arr = adj[node];
          if(arr.length === 0){
            return true;
          };
          visit.add(node);
          let res = arr.every((item)=>dfs(item,visit));
          memo[node] = res;
          return memo[node];
        }
        let done = new Set();
        for(let i=0;i<numCourses;i++){
            let visit = new Set();
            if(!dfs(i,visit)) return false;
        }
        return true;
    }
}
