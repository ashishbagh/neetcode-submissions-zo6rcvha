class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let left=0;
        const right = nums.length;

        while(left<right){
            nums.push(nums[left]);
            left++;
        }

        return nums;
    }
}
