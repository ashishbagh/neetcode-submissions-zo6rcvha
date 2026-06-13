class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
       let one = 0;
    let two = 0;

    for (let i = cost.length - 1; i >= 0; i--) {
        let curr = cost[i] + Math.min(one, two);
        two = one;
        one = curr;
    }

    return Math.min(one, two);
    }
}
