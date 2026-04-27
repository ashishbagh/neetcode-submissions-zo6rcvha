class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let t = n+"";
        let visit = new Set();
        const recur= (num)=>{
            if(visit.has(num)) return false;
            if(num === 1) return true;
            let res =0;
            let str= num+"";
            for(let i=0;i<str.length;i++){
                let prd=parseInt(str[i])*parseInt(str[i]);
                res+=prd;
            }
            visit.add(num);
            return recur(res);
        }

        return recur(n);
    }
}
