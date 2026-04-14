class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        let t = triplets;
        let set = new Set();
        for(const t of triplets){
            if(t[0]>target[0] || t[1]>target[1] || t[2]>target[2]) continue;
            for(const i in t){
                console.log(t[i],target[i]);
                if(t[i]===target[i]){
                    set.add(i);
                }
            }
        }
        console.log(set.size)
        return set.size === 3;
    }
}
