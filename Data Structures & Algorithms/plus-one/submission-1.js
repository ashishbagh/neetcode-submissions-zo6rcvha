class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let str = digits.join("");
        
        let num = (str-"0")+1;
        let arr =[];
        while(num){
           let dig = Math.floor(num%10);
           arr.unshift(dig);
           num=Math.floor(num/10);
        }

        return arr;
    }
}
