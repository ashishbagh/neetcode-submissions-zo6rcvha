class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if(hand.length%groupSize !==0) return false;
        let map = new Map();

        for(const pos of hand){
            map.set(pos,(map.get(pos) || 0)+1);
        }
        
        let total=0;
        console.log(map);
        hand = hand.sort((a,b)=>a-b);
        for(const num of hand){
            if(!map.has(num-1) && map.has(num)){
                let count=1;
                let curr = num;
                map.set(curr,map.get(curr)-1);
                if(map.get(curr) === 0) map.delete(curr);
                while(map.has(curr+1)){
                   if(count === groupSize) break;
                   curr++
                   count++;
                   map.set(curr,map.get(curr)-1);
                   if(map.get(curr) === 0) map.delete(curr);
                }
                console.log(map);
                if(count === groupSize) total++;
            }

        }
        console.log(total)
        return total*groupSize === hand.length;



    }
}
