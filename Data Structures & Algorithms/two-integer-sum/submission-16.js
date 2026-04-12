class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for(let i=0;i<nums.length;i++){
            let diff = target-nums[i];
            let val = map.get(diff);
            console.log(val,map);
            if(val === undefined){
              map.set(nums[i],i);
            }else if(val !== i){
              return [val,i];
            }
        }
        return []
    }
}
