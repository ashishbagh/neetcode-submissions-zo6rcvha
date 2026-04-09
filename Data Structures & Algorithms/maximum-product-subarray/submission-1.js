class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let result = Math.max(...nums);

        let currMax = 1;
        let currMin = 1;

        for(let i=0;i<nums.length;i++){
            if(nums[i]===0){
                currMax =1;
                currMin=1;
            }

            let temp = currMax*nums[i];
            currMax = Math.max(temp,currMin*nums[i],nums[i]);
            currMin = Math.min(temp,currMin*nums[i],nums[i]);
            result = Math.max(result,currMax);
        }

        return result;
    }
}
