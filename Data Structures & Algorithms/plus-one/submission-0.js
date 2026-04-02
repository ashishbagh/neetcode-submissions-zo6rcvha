class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
      let num = digits.join('')*1;
      let res = num+1+"";
      return res.split('');
    }
}
