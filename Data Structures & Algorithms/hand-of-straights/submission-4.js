class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) return false;

  const count = new Map();

  for (const num of hand) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  hand.sort((a, b) => a - b);

  for (const num of hand) {
    if (count.get(num) === 0) continue;

    for (let i = 0; i < groupSize; i++) {
      const curr = num + i;

      if (!count.get(curr)) return false;

      count.set(curr, count.get(curr) - 1);
    }
  }

  return true;


    }
}
