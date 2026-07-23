class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {

        let rows = heights.length;
        let cols = heights[0].length;
        const res=[];

        const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

        const pac = new Set();
        const alt = new Set();

        

        const dfs=(r,c,visit,prev)=>{
            let key = `${r},${c}`;
            if(r>=rows || c>=cols || r<0 || c<0 || visit.has(key) || heights[r][c]<prev){
                return;
            }
            visit.add(key);
            for(const [dr,dc] of dirs){
                dfs(r+dr,c+dc,visit,heights[r][c]);
            }
            return;
        }

        for(let c=0;c<cols;c++){
            dfs(0,c,pac,heights[0][c]);
            dfs(rows-1,c,alt,heights[rows-1][c]);
        }


        for(let r=0;r<rows;r++){
            dfs(r,0,pac,heights[r][0]);
            dfs(r,cols-1,alt,heights[r][cols-1]);
        }

        for(let r=0;r<rows;r++){
             for(let c=0;c<cols;c++){
                 let key = `${r},${c}`;
                  if (pac.has(key) && alt.has(key)) {
                    res.push([r, c]);
                    }

             }

        }

        return res;
        
        }
}
