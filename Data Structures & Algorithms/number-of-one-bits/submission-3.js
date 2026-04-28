class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let strs = n.toString(2);
        let res=0;
        let num=1;

        for(const str of strs){
            if(str === "1") res+=1;
        }
        return res;
    }
}
