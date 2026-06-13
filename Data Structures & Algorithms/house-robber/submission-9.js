class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 1) return nums[0];
        let result = [nums[0],Math.max(nums[0],nums[1])];

        for(let i=2;i<nums.length;i++){
            result[i] = Math.max(result[i-1],result[i-2]+nums[i]);
        }

        return result[result.length-1];
    }
}
