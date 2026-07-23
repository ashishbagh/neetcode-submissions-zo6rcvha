class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {

        let rows=grid.length;
        let cols=grid[0].length;
        let freshFruits=0;
        let queue=[];
        for(let r=0;r<rows;r++){
            for(let c=0;c<cols;c++){
                console.log(grid[r][c]);
                if(grid[r][c]===1)  freshFruits+=1;
                if(grid[r][c] === 2) queue.push([r,c]);
            }
        }

        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        const bfs=(r,c,next)=>{
            for(const [dr,dc] of dirs){
                const nr = r+dr;
                const nc = c+dc;
                if(nr>=0 && nc>=0 && nr<rows && nc<cols && grid[nr][nc] === 1){
                    next.push([nr,nc]);
                    grid[nr][nc] = 2;
                    freshFruits--;
                }
            }
            return next;
        }

        let count=0;
        while(queue.length !==0){
            let nextQueue=[];
            while(queue.length !==0){
                const [r,c] = queue.pop();
                nextQueue = bfs(r,c,nextQueue);
            }

            if(nextQueue.length>0) count++;
            queue = nextQueue;
        }
        
        if(freshFruits>0) return -1;
        else return count;
    }
}
