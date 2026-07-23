class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
      
    let cache = new Map();
    const backTracking = (i, sum) => {
      let key = `${i},${sum}`;
      if(cache.has(key)) return cache.get(key);
      if(i>=nums.length){
        if(sum===target) return 1;
        else return 0;
      }

      cache.set(key,backTracking(i+1,nums[i]+sum)+backTracking(i+1,-nums[i]+sum));
      return cache.get(key);
      
    };

    return backTracking(0, 0);
    }
}
