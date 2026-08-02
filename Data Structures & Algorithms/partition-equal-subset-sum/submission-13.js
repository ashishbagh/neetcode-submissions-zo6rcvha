class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const sum = nums.reduce((a,b)=>a+b,0);
        if(sum%2 !==0) return false;
        //const memo
        const subset = (i,target)=>{
           if(target === Math.floor(sum/2)){
            return true;;
           }
           if(target>Math.floor(sum/2)) return false;

           for(let j=i;j<nums.length;j++){
               if(subset(j+1,target+nums[j])){
                 return true;
               };
           }

           return false;
        }
       return subset(0,0);

        return result;
    }
}
