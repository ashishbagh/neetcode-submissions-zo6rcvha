class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
         let res =0;
         const isPalindrom = (l,r)=>{
            let count=0;
            while(l>=0 && r<s.length && s[l]===s[r]){
                r++;
                l--
                count++;
            }
            return count;
         }

         for(let i=0;i<s.length;i++){
            res+= isPalindrom(i,i) + isPalindrom(i,i+1);
         }

         return res;

    }
}
