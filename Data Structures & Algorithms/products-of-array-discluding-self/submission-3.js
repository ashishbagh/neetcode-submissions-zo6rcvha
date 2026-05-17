class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pre=1;
        let post=1;
        let result=[];

        for(let i=0;i<nums.length;i++){
            result[i] = pre;
            pre = pre*nums[i];
        }

        for(let i=nums.length-1;i>=0;i--){
            result[i] = post*result[i];
            post = post*nums[i];
        }

        return result;
    }
}
