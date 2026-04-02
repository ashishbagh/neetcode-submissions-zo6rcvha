class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;
        let rows = grid.length;
        let cols = grid[0].length;
        let set = new Set();
        let area = [0]
        const dfs=(r,c,visited)=>{
            let key = `${r},${c}`;
            if(r<0 || c<0 || r>=rows || c>=cols || grid[r][c] !== 1 || visited.has(key)){
                return;
            }
            visited.add(key);
            area[0]++;
            dfs(r+1,c,visited);
            dfs(r-1,c,visited);
            dfs(r,c+1,visited);
            dfs(r,c-1,visited);
            return;
        }


        for(let r=0;r<rows;r++){
            for(let c=0;c<cols;c++){
                if(grid[r][c] ===1){
                    dfs(r,c,set);
                   // console.log(area[0]);
                    maxArea = Math.max(maxArea,area[0]);
                    area[0]=0;
                }
            
            }
        }
        //console.log(maxArea);
        return maxArea;
    }
}
