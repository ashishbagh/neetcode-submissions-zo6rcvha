class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {

        
        const adj = {};
        for(let i=0;i<numCourses;i++){
            adj[i]=[];
        }
        for(const [c,p] of prerequisites){
            adj[c].push(p);
        }
         
        let result=[];
        let memo= new Map();
        const dfs=(i,visit)=>{
           if(memo.has(i)) return memo.get(i);
           if(visit.has(i)) return false;
           visit.add(i);
           const preqs= adj[i];
           memo.set(i,preqs.every((j)=>dfs(j,visit)));
           visit.delete(i);
           result.push(i)
           return memo.get(i);
        }

        for(let i=0;i<numCourses;i++){
            let visit = new Set();
            if(!dfs(i,visit)) return [];
        }
        return result;
    }
}
