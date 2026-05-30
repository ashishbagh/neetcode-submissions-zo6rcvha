class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let  res="";
        const check=(l,r)=>{
          
            while(l>=0 && r<s.length && s[l]===s[r]){
                let len = r-l+1;
                if(res.length<len){
                    res= s.slice(l,r+1);
                }
                l--;
                r++
            }
            return;
        }


        for(let i=0;i<s.length;i++){
            check(i,i);
            check(i,i+1);
        }

        return res;
    }
}
