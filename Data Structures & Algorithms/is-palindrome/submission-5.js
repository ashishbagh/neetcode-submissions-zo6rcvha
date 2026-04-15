class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l=0;
        let r=s.length-1;

        while(l<r){
            while(l<r && !this.isValidStr(s[r])){r--};
            while(l<r && !this.isValidStr(s[l])){l++};
            console.log(s[l],s[r])
            if(!s[l] || !s[r] || s[l].toLowerCase() !== s[r].toLowerCase()) return false;
            l++;
            r--;
        }

        return true;
    }


    isValidStr(s){
      return /^[a-zA-Z0-9]+$/.test(s);
    };
}
