class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {

      let pac = new Set();
      let alt = new Set();
      let r= heights.length;
      let c = heights[0].length;
      let res=[];

      const dfs=(i,j,set,prevHeight)=>{
         let key= `${i},${j}`;
          if(i<0 || j<0 || set.has(key) || i===r || j===c || heights[i][j]<prevHeight) return;
          set.add(key);
          dfs(i-1,j,set,heights[i][j]);
          dfs(i+1,j,set,heights[i][j]);
          dfs(i,j-1,set,heights[i][j]);
          dfs(i,j+1,set,heights[i][j]);
      }
    // top and bottom
    for(let j=0;j<c;j++){
      dfs(0,j,pac,heights[0][j]);
      dfs(r-1,j,alt,heights[r-1][j]);
    }

     for(let i=0;i<r;i++){
      dfs(i,0,pac,heights[i][0]);
      dfs(i,c-1,alt,heights[i][c-1]);
    }


     for(let i=0;i<r;i++){
        for(let j=0;j<c;j++){
         let key= `${i},${j}`;
         if(pac.has(key) && alt.has(key)){
           res.push([i,j])
         }
        }  
      }

     return res;





        
    }
}
