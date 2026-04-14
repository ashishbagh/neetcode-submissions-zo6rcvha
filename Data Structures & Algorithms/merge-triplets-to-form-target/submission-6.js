class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        let t = triplets;
        for(let i=0;i<t.length;i++){
            let l=0,m=1,r=2;
            let res=[]
            for(let j=i+1;j<t.length;j++){
                if(Math.max(t[i][l],t[j][l]) <= target[l] && Math.max(t[i][m],t[j][m]) <= target[m] && Math.max(t[i][r],t[j][r]) <= target[r]){
                    res = [Math.max(t[i][l],t[j][l]),Math.max(t[i][m],t[j][m]),Math.max(t[i][r],t[j][r])];
                }
                if(res.length>0) t[i] = res;
            }
            
            console.log(res)
            if(res.join('') === target.join('') || t[i].join('') === target.join('')) return true;
        }

        return false;
    }
}
