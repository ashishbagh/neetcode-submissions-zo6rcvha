class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adj = {};
        for (let i = 0; i < n; i++) {
            adj[i] = [];
        }

        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        let visit = new Set();

        let keys = Object.keys(adj);
        const dfs= (node)=>{
            if(visit.has(node)) return;
            visit.add(node);
            for (const neighbor of adj[node]) {
                dfs(neighbor);
             }
            return;
        }
        let count=0;
        for (let node = 0; node < n; node++) {
            if (!visit.has(node)) {
                dfs(node);
                count++;
            }
        }
        return count;
    }
}
