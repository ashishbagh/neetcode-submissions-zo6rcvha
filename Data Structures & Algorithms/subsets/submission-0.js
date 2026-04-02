class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
      let result = [];

      const backtracking = (pointer,subset)=>{
        if(pointer>nums.length) return;
       // console.log(subset);
        result.push([...subset]);
        for(let i=pointer;i<nums.length;i++){
          subset.push(nums[i]);
          backtracking(i+1,subset);
          subset.pop();
        }
        return;
      }

      backtracking(0,[]);
      return result;
    }
}
