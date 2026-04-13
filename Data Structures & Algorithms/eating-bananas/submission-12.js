class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
    let right = Math.max(...piles);
    let min = right;

    const speed = (left, right) => {
        if (left > right) return;

        let count = 0;
        let mid = Math.floor((left + right) / 2);

        for (const pile of piles) {
            count += Math.ceil(pile / mid);
        }

        if (count <= h) {
            min = Math.min(min, mid);
            speed(left, mid - 1);
        } else {
            speed(mid + 1, right);
        }
    };

    speed(left, right);
    return min;

    }
}
