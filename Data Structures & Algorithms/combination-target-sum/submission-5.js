class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(coins, n) {
        let result = [];

    const dfs = (target, left, res) => {
      if (target === n) {
        result.push([...res]);
        return;
      }
      if (target > n) return;
      if (left >= coins.length) return;

      for (let i = left; i < coins.length; i++) {
        res.push(coins[i]);
        let temp = dfs(target + coins[i], i, res);
        res.pop();
      }

      return;
    };

    dfs(0, 0, []);
    return result;
    }
}
