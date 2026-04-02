class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
      let rows = grid.length;
      let cols = grid[0].length;

      let rottonPositions = [];
      let freshFruits = new Map();

      for(let r=0;r<rows;r++){
         for(let c=0;c<cols;c++){
            if(grid[r][c]=== 2) rottonPositions.push([r,c]);
            if(grid[r][c]=== 1) freshFruits.set(`${r},${c}`,true);
         }
      }

      const bfs = (r,c,nextQueue)=>{
          if(r-1>=0 && grid[r-1][c] === 1){
              grid[r-1][c] = 2;
              nextQueue.push([r - 1, c]);
              freshFruits.set(`${r-1},${c}`,false);
          }
          if(r+1<rows && grid[r+1][c] === 1){
              grid[r+1][c] = 2;
              nextQueue.push([r + 1, c]);
              freshFruits.set(`${r+1},${c}`,false);
          }
          if(c-1>=0 && grid[r][c-1] === 1){
              grid[r][c-1] = 2;
              nextQueue.push([r, c-1]);
              freshFruits.set(`${r},${c-1}`,false);
          }
          if(c+1<cols && grid[r][c+1] === 1){
              grid[r][c+1] =2;
              nextQueue.push([r, c+1]);
              freshFruits.set(`${r},${c+1}`,false);
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

      for(const value of freshFruits.values()){
        if(value) return -1;
      }

      return count
     
    }
}
