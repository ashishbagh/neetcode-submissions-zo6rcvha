class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        let set = new Set();
        const [f,s,third] = target;
       
        for(const t of triplets){
            if(t[0]>f || t[1]>s || t[2]>third) continue;
            for(const i in t){
                if(t[i]===target[i]){
                  set.add(i);
                }
            }
        }
        return set.size === 3;
    }
}
