class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
      let result=[];
      let  bits = Math.ceil(Math.log2(n+1)) ||1;

      for(let i=0;i<=n;i++){
        let res =0
        for(let j=bits-1;j>=0;j--){
            let output = (i>>j)&1;
            if(output === 1){
              res+=1;
            }
        }
        result.push(res);
      }

      return result;
    }
}
