class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       let map={};
       let n = nums.length;
       const result = Array.from({length:n+1},()=>[]);
       for(const num of nums){
         if(!map[num]){
            map[num] = 1
         }else{
            map[num] += 1
         }
        }

        for(const key of Object.keys(map)){
            let fre = map[key]
            result[fre].push(key);
        }

        let res=[];
        let i=n;

        while(k>0){
            let arr = result[i];
            res = [...res,...arr];
            i--
            k=k-arr.length;
        }

        return res;
    }
}
