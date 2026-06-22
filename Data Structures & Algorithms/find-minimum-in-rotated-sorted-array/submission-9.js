class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
       let l=0;
       let r=nums.length-1;

       while(l<r){
        let mid = parseInt((l+r)/2);
        if(nums[r]<nums[mid]){
            l=mid+1;
        }else if(nums[r]>nums[mid]){
            r=mid;
        }else{
            return nums[mid];
        }
       }

       return nums[l]
       
    }
}
