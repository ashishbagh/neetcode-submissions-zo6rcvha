class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let l=0;
        let sum=0;
        let maxSum=-Infinity;

        while(l<nums.length){
            if(sum<0){
                sum=0;
            }
            sum=sum+nums[l];
            maxSum = Math.max(maxSum,sum);
            l++;
        }

        return maxSum;
    }
}
