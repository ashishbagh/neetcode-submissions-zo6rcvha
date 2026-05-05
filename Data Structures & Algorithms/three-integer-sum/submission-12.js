class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums=nums.sort((a,b)=> a-b);
        let result=[];
        let set = new Set();
    
        for(let i=0;i<nums.length;i++){
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let res = this.getTwoSum(i,nums);
            if(res.length>0) result.push(...res);
        }
        return result;
    }
     
    getTwoSum(i,nums){
       let l=i+1;
       let r=nums.length-1;
       let res=[];
       while(l<r){
         let sum=nums[i]+nums[l]+nums[r];
         if(sum>0){
            r--;
         }else if(sum<0){
            l++;
         }else{
            res.push([...[nums[i],nums[l],nums[r]]]);
            l++;
            r--;
            while (l < r && nums[l] === nums[l - 1]) { // remove duplicate
              l++;
            }
         }
       }

       return res;
    }
}
