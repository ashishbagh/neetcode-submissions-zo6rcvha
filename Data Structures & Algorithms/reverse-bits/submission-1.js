class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        
        let str = n.toString(2).padStart(32, '0').split('');
        let left=0;
        let right=str.length-1;

        while(left<right){
            [str[left],str[right]]=[str[right],str[left]];
            left++;
            right--;
        }
        return parseInt(str.join(''),2);
    }
}
