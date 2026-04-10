class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      let map = new Map();
      for(const num of nums){
         let val = map.get(num);
         if(!val) map.set(num,1);
         else map.set(num,val+1);
      }
      map = new Map([...map.entries()].sort((a,b)=> a[1]-b[1]));
      let res=[];
      for(const key of map.keys()){
            res.push(key);
      }
      return res.slice(map.size-k,map.size);
    }
}
