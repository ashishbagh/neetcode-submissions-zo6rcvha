class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k=k;
        this.nums = nums.sort((a,b)=>a-b);
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        let {k,nums} = this;

        nums.unshift(val);

        for(let i=0;i<nums.length-1;i++){
            if(nums[i]>nums[i+1]){
                [nums[i],nums[i+1]]=[nums[i+1],nums[i]]
            }
        }
        this.nums=nums;
        return nums[nums.length-k];
    }
}
