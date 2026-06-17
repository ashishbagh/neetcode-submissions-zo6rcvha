class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pre=1;
        let post=1;
        let result=[];
         
         for(const i in nums){
            result[i] = pre;
            pre=nums[i]*pre;
         }

          for(let i=nums.length-1;i>=0;i--){
            result[i] = post*result[i];
            post= post*nums[i];
         }

        return result;
    }
}
