class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       let map = new Map();

       for(let num of nums){
         map.set(num,(map.get(num) || 0)+1);
       }

       const arr = Array.from({length:nums.length+1},()=>[])
       
       for(const [key,value] of map){
         arr[value].push(key)
       }
       
       let r=arr.length-1;
       let result=[];
       while(r>=0){
        if(arr[r].length>0) result = [...result,...arr[r]];
        if(k===result.length){
           return result;
        }
        r--
       }
       return result;
    }
}
