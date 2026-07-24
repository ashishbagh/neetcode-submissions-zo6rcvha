class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        let l=0;
        let r=0;

        let need = new Map();
        let window = new Map();
        let res = "";
        let max = Infinity;
        let valid=0;

        for(const char of t){
            need.set(char,(need.get(char)||0)+1);
        }

        while(r<s.length){
            let ch = s[r];
            window.set(ch,(window.get(ch)||0)+1);
            if(need.has(ch) && window.get(ch)===need.get(ch)){
                valid++;
            }

            while(valid === need.size){
                if(r-l+1<max){
                    res= s.substring(l,r+1);
                    max=r-l+1
                }

                let left = s[l];
                window.set(left,window.get(left)-1);
                if(need.has(left) && window.get(left)<need.get(left)){
                    valid--;
                }
                l++

            }

            r++

        }


        return res;


    }
}
