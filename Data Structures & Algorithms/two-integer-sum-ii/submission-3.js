class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
     let map = {};
  for (let i = 0; i < numbers.length; i++) {
    if (!map[numbers[i]]) {
      map[numbers[i]] = i;
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    if (map[target - numbers[i]] !== undefined) {
      return [i + 1, map[target - numbers[i]] + 1];
    }
  }
    }
    
    }
