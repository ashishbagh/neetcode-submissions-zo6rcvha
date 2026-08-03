class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let strs = n.toString(2);
        let res=0;
         console.log(strs);
        for(const str of strs){
            if(str === "1") res+=1;
        }
        return res;
    }
}
