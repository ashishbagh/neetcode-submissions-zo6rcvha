class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        let set = new Set();
        
        for(const t of triplets){
            if(t[0]>target[0] || t[1]>target[1] || t[2]>target[2]) continue;
            for(const i in t){
                if(t[i]===target[i]){
                  set.add(i);
                }
            }
        }
        return set.size === 3;
    }
}
