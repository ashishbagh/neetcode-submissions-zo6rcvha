class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if(strs.length===1) return strs[0];
        let left=0;
        let right=1;
        let i=0;
        let commonStr="";
        let res=[]
        let len=Infinity;
        while(right<strs.length){
           // console.log(strs[left][i])
            if(strs[left][i] && strs[right][i] && strs[left][i]=== strs[right][i]){
                commonStr= commonStr+strs[left][i];
                i++;
            }else{
                len = Math.min(len,commonStr.length);
                res.push(commonStr);
                left++;
                right++;
                commonStr="";
                i=0;
            }
        }


        console.log(res,len)
        return res[0].substring(0,len);
    }
}
