class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
    const sum = nums.reduce((a, b) => a + b, 0);
    if (sum % 2 !== 0) return false;

    const targetSum = sum / 2;
    const memo = new Map();

    const subset = (i, target) => {
        const key = `${i},${target}`;
        if (memo.has(key)) return memo.get(key);

        if (target === targetSum) {
            memo.set(key, true);
            return true;
        }

        if (i >= nums.length || target > targetSum) {
            memo.set(key, false);
            return false;
        }

        const ans =
            subset(i + 1, target + nums[i]) ||
            subset(i + 1, target);

        memo.set(key, ans);
        return ans;
    };

    return subset(0, 0);
}
}
