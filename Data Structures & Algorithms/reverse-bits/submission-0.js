class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
      let str = n.toString(2).padStart(32, '0');
      let reversed = str.split("").reverse().join("");

      return parseInt(reversed,2) >>>0;
    }
}
