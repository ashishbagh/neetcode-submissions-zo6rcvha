class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
      let result = [];
      nums = nums.sort((a,b)=>a-b)

        const backtracking = (pointer, subset) => {
            if (pointer > nums.length) return;
            result.push([...subset]);
            for (let i = pointer; i < nums.length; i++) {
              if(i>pointer && nums[i] === nums[i-1]) continue;
                subset.push(nums[i]);
                backtracking(i + 1, subset);
                subset.pop();
            }
            return;
        }

        backtracking(0, []);
        return result;
    }
}
