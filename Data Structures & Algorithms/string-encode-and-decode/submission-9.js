class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        strs.forEach((s) => {
            res += s.length + "#" + s;
        });
        console.log(res);
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
       console.log(str)
       let result=[];
       let i=0;
       while(i<str.length){
         let j=i;
         while(str[j] !== "#"){
            j++;
         }
         let len = parseInt(str.slice(i,j));
         result.push(str.slice(j+1,j+1+len));
         i=j+len+1;
       }
        return result;
    }
}
