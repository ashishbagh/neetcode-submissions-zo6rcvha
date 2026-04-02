class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
      if(n===0) return true;

      let adj = {}
      for (let i = 0; i < n; i++) {
       adj[i] = [];
      }

      for(const num in edges){
        let [n1,n2]=edges[num];
        adj[n1].push(n2);
        adj[n2].push(n1);
      }

      let visit = new Set();
      const dfs = (i,prev)=>{
        if(visit.has(i)) return 1;
        visit.add(i);
        for(const j in adj[i]){
          if(adj[i][j]===prev) continue;
          if(!dfs(adj[i][j],i)) return 1;
        }
        return 1;
      }

      let node=0;
      let cnt=0;
      while(visit.size !== n){
        //console.log(visit);
        if(!visit.has(node)){
          dfs(node,node-1);
          cnt+=1;
        }
        node++;
      }
      //console.log(visit);
      return cnt;
    }
}
