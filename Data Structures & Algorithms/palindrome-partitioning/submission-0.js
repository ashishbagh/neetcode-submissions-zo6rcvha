class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let path = []
        let result = [];
        const palidrom=(l,r)=>{
            while(l<r){
                if(s[l] !== s[r]) return false;
                r--;
                l++;
            }
            return true;
        }
        
        const dfs = (i)=>{
            if(i>=s.length){
              result.push([...path]);
              return;
            }
            for(let j=i;j<s.length;j++){
                if(palidrom(i,j)){
                    path.push(s.slice(i,j+1));
                    dfs(j+1);
                    path.pop();
                }
            }
        }

        dfs(0);

    return result;
        }
}
