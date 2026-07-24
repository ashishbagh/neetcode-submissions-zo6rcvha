class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
         const memo = {};

    const dfs = (remain, i) => {
        if (remain === 0) return 1;
        if (remain < 0) return 0;
        if (i === coins.length) return 0;

        const key = `${remain},${i}`;
        if (memo[key] !== undefined) return memo[key];

        const take = dfs(remain - coins[i], i);
        const skip = dfs(remain, i + 1);

        memo[key] = take + skip;
        return memo[key];
    };

    return dfs(amount, 0);
    }
}
