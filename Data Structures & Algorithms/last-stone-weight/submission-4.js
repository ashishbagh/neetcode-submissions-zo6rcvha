class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {

      let right= stones.length-1;
      console.log(stones);
      for(let i=right;i>0;i--){
        stones=stones.sort((a,b)=>a-b);
        let stone1 = stones[i];
        let stone2 = stones[i-1];
        if(stone1 === stone2){
          stones.pop();
          stones.pop();
          i = i-1;
        }else if(stone1>stone2){
          stones[i-1] = stone1-stone2;
          stones.pop();
        }else{
           stones[i-1] = stone2-stone1;
           stones.pop();
        }
    }
      if(stones.length === 0) return 0;
      return stones[0];

    }
}
