class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let carry = 1;
    
        for(let i=digits.length-1;i>=0;i--){
           let sum = digits[i]+carry;
           carry=Math.floor(sum/10);
           digits[i]=sum%10;
        }
        if(carry !==0) digits.unshift(carry);
        return digits;
    }
}
