class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      let map = {};
      let numbers =nums;
      for (let i = 0; i < numbers.length; i++) {
        if (!map[numbers[i]]) {
          map[numbers[i]] = i;
        } else {
          map[numbers[i] + "#"] = i;
        }
      }
      for (let i = 0; i < numbers.length; i++) {
        let value = target - numbers[i];
        if (
          (map[value] !== undefined && map[value] !== i) ||
          (map[value + "#"] !== undefined && map[value + "#"] !== i)
        ) {
          let index = map[value + "#"] ? map[value + "#"] : map[value];
          return [i, index];
        }
      }
    }
}
