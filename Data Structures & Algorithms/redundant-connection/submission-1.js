class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        let n = edges.length;
        let adj = new Map();

        const isReachable = (start, target,visited)=>{
            if(start === target) return true;

            visited.add(start);

            let neighbours = adj.get(start);

            for(const neighbour of neighbours){
                if(!visited.has(neighbour)){
                    if(isReachable(neighbour,target,visited)) return true;
                }
            }
            return false;
        }

        for(const edge of edges){
            let [u,v] = edge;

            if(adj.has(u) && adj.has(u)){
                if(isReachable(u,v,new Set())){
                    return [u,v];
                }

            }

            if(!adj.has(u)) adj.set(u,[]);
            if(!adj.has(v)) adj.set(v,[]);
            adj.get(u).push(v);
            adj.get(v).push(u);

        }



    }
}
