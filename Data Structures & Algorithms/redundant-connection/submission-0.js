class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
         const n = edges.length;
    const adj = new Map();

    // 1. Helper function to perform DFS
    const isReachable = (current, target, visited) => {
        if (current === target) return true;
        
        visited.add(current);
        
        const neighbors = adj.get(current) || [];
        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                if (isReachable(neighbor, target, visited)) {
                    return true;
                }
            }
        }
        return false;
    };

    // 2. Iterate through each edge
    for (let i = 0; i < n; i++) {
        const [u, v] = edges[i];
        
        // Before adding the edge, check if a path already exists
        if (adj.has(u) && adj.has(v)) {
            // Check if v is reachable from u
            if (isReachable(u, v, new Set())) {
                // If reachable, this edge completes a cycle
                return [u, v];
            }
        }
        
        // 3. Add the edge to the adjacency list (bidirectional)
        if (!adj.has(u)) adj.set(u, []);
        if (!adj.has(v)) adj.set(v, []);
        adj.get(u).push(v);
        adj.get(v).push(u);
    }
    
    return [];
    }
}
