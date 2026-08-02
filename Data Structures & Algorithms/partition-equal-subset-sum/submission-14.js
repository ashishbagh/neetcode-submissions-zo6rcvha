class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const sum = nums.reduce((a,b)=>a+b,0);
        if(sum%2 !==0) return false;
        const memo = new Map();
        const subset = (i,target)=>{
           let key= `${i},${target}`;
           if(memo.has(key)) return memo.get(key);
           if(target === Math.floor(sum/2)){
            memo.set(key,true);
            return true;;
           }
           if(target>Math.floor(sum/2)) return false;

           for(let j=i;j<nums.length;j++){
               if(subset(j+1,target+nums[j])){
                  memo.set(key,true);
                 return true;
               };
           }
            memo.set(key,false);
           return false;
        }
       return subset(0,0);

        return result;
    }
}
