class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let l = grid[0].length;
        let h = grid.length;
        let visited = new Set();
       
        const dfs = (i, j) => {
            let key = `${i},${j}`;
            if (
                i < 0 || j < 0 ||
                i >= h || j >= l ||
                visited.has(key) ||
                grid[i][j] !== "1"
            ) {
                return;
            }
            visited.add(key);
            dfs(i + 1, j);
            dfs(i - 1, j);
            dfs(i, j + 1);
            dfs(i, j - 1);
        }

        let count = 0;
        for (let i = 0; i < h; i++) {
            for (let j = 0; j < l; j++) {
                if (grid[i][j] === "1" && !visited.has(`${i},${j}`)) {
                    count += 1;
                    dfs(i, j);
                }
            }
        }

        return count;
    }
}
