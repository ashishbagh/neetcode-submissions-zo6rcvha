class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
      let result = [];
      let booArr = new Array(nums.length).fill(false);

        const backtracking = (subset,decision) => {
           if(subset.length === nums.length){
               result.push([...subset]);
               return;
            }
            for (let i = 0; i < nums.length; i++) {
                if(decision[i]) continue;
                subset.push(nums[i]);
                decision[i] = true;
                backtracking(subset,decision);
                subset.pop();
                decision[i] = false;
            }
            return;
        }

        backtracking([],[...booArr]);
        return result;
    }
}
