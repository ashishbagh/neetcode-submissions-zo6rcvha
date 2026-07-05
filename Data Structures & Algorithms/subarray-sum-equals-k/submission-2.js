class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
      let map={0:1};
       let prefix = 0;   
       let count=0;
      for(const num of nums){
          prefix+=num;
          let diff = prefix-k;

          if(map[diff]){
            count+=map[diff];
          }
          if(!map[prefix]){
            map[prefix]=1;
          }else{
            map[prefix]+=1;
          }
      }

      return count;
    }
}
