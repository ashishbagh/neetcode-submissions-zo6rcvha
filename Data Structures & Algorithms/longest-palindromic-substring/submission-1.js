class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
      let res="";
      let resLen=0;

      const checkPalin = (r,l)=>{
        while(l>=0 && r<s.length && s[r]===s[l]){
            if(r-l+1 >resLen){
              res = s.slice(l,r+1);
              resLen = r-l+1
            }
            l--;
            r++;
        }
      }

      for(let i=0;i<s.length;i++){
        // odd
        checkPalin(i,i);
        checkPalin(i,i+1);
      }

      return res
    }
}
