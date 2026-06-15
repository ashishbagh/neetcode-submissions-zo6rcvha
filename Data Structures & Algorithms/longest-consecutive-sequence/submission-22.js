class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let maxCount = 0;
        let l=0;

        while(l<nums.length){
             let count=1;
            if(set.has(nums[l]-1)){
                let num=nums[l];
                while(set.has(num)){
                    count++;
                    num=num+1;
                }
            }
             maxCount=Math.max(count,maxCount);
            l++
        }

        return maxCount;
    }
}
