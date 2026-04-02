class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */ 
  // 25ms 9.8mb
  longestConsecutive(nums) {
    

     let set = new Set(nums);
     let max=0;
     for(const num of nums){
      let count=1;
      let numb = num;
      while(set.has(numb+1)){
        count+=1;
        numb = numb+1;
      }
       max = Math.max(max,count);
     }

     return max;
    }
}