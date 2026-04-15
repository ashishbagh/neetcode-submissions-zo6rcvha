class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let n=nums.length;
        let arr = Array.from({length:n+1},()=>[]);
        let map = new Map();

        for(const num of nums){
            let val = map.get(num);
            if(!val){
                map.set(num,1);
            }else{
                map.set(num,val+1);
            }
        }

        for(const key of map.keys()){
            let val = map.get(key);
            arr[val].push(key);
        }
       let right = n;
       let res = [];
       while(k>0){
        k = k-arr[right].length;
        res = [...res,...arr[right]];
        right--
       }
        return res;
    }
}
