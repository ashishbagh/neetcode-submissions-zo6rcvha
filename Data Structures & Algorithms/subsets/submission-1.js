class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result=[]
        const dfs=(subset,pointer)=>{
            if(pointer>nums.length) return;
           // if(res.length>nums.length) return;

            result.push([...subset]);

            for(let i=pointer;i<nums.length;i++){
                subset.push(nums[i]);
                dfs(subset,i+1);
                subset.pop();
            }
         return;
        }

        dfs([],0);

        return result;
    }
}
