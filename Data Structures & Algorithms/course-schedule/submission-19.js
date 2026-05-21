class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adj={};

        for(let i=0;i<numCourses;i++){
            adj[i]=[];
        }

        for(const [v,m] of prerequisites){
            adj[v].push(m);
        }

        const dfs = (node,visit)=>{
            if(visit.has(node)) return false;
             visit.add(node);
             let pre = adj[node];
           const ans =  pre.every((i)=> dfs(i,visit)===true);
            visit.delete(node);
            return ans;
        }

        for(const key of Object.keys(adj)){
            let visit = new Set();
            if(!dfs(key,visit)) return false;
        }
        
        return true

    }
}
