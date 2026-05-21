class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {        
        const adj={};
        let memo= new Map();
        let result=[];

        for(let i=0;i<numCourses;i++){
            adj[i]=[];
        }

        for(const [v,m] of prerequisites){
            adj[v].push(m);
        }

        const dfs = (node,visit)=>{
             if(memo.has(node)) return memo.get(node);
             if(visit.has(node)) return false;
             visit.add(node);
             let pre = adj[node];
             const ans =  pre.every((i)=> dfs(i,visit)===true);
             result.push(node);
             memo.set(node,ans);
             visit.delete(node);
             return ans;
        }

        for(let i=0;i<numCourses;i++){
            let visit = new Set();
            if(!dfs(i,visit)) return [];
        }
        
        return result
    }
}
