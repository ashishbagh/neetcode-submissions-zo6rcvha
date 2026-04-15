class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let maxCount = 0;
       for (const num of set) {
        if (!set.has(num - 1)) {
            let length = 1;
            let currentNum = num;
            while (set.has(currentNum + 1)) {
            length++;
            currentNum++;
            }
            maxCount = Math.max(maxCount, length);
        }
        }
        return maxCount;
    }
}
