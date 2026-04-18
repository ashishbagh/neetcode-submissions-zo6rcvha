class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let l=0;

        for(let i=0;i<nums.length;i++){
            if(nums[i] !==0){
                [nums[l],nums[i]] = [nums[i],nums[l]] 
                l++;
            }
        }
    }
}
