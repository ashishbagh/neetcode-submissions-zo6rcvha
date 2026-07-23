class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adj={};
        let memo= new Map();

        for(let i=0;i<numCourses;i++){
            adj[i]=[];
        }

        for(const [v,m] of prerequisites){
            adj[v].push(m);
        }

        const dfs = (node,visit)=>{
            if(visit.has(node)) return false;
            visit.add(node);
            const neigbhours = adj[node];
            const res = neigbhours.every((child)=>dfs(child,visit)=== true);
            visit.delete(node);
            return res;
        }
         console.log(adj)
        for(const key of Object.keys(adj)){
            let visit = new Set();
            if(!dfs(key,visit)) return false;
        }
        
        return true

    }
}
