class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
       let map = {0:1};
       let prefixSum=0;
       let count =0;
       for(const num of nums){
            prefixSum+=num;
            let temp= prefixSum-k;
            if(map[temp]){
                count+=map[temp];
            }
            if(!map[prefixSum]){
                map[prefixSum]=1;
            }else{
                 map[prefixSum]+=1;
            }
       }

       return count;
    }
}
