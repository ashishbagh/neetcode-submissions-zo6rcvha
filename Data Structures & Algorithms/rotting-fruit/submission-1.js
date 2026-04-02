class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
      let rows = grid.length;
      let cols = grid[0].length;

      let rottonPositions = [];
      let freshFruits = 0;

      for(let r=0;r<rows;r++){
         for(let c=0;c<cols;c++){
            if(grid[r][c]=== 2) rottonPositions.push([r,c]);
            if(grid[r][c]=== 1) freshFruits++;
         }
      }

      const bfs = (r,c,nextQueue)=>{
          if(r-1>=0 && grid[r-1][c] === 1){
              grid[r-1][c] = 2;
              nextQueue.push([r - 1, c]);
              freshFruits--;
          }
          if(r+1<rows && grid[r+1][c] === 1){
              grid[r+1][c] = 2;
              nextQueue.push([r + 1, c]);
              freshFruits--;
          }
          if(c-1>=0 && grid[r][c-1] === 1){
              grid[r][c-1] = 2;
              nextQueue.push([r, c-1]);
             freshFruits--;
          }
          if(c+1<cols && grid[r][c+1] === 1){
              grid[r][c+1] =2;
              nextQueue.push([r, c+1]);
              freshFruits--;
          }
          return nextQueue;
      }
      let count =0;
       while(rottonPositions.length !==0){
        let nextQueue=[];
        while(rottonPositions.length !==0){
          const [r,c] = rottonPositions.pop();
          nextQueue = bfs(r,c,nextQueue);
        }
        if(nextQueue.length>0) count+=1;
        rottonPositions = nextQueue;
      }

      return freshFruits >0 ? -1 :count;
     
    }
}
