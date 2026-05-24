class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        intervals = intervals.sort((a,b)=>a[0]-b[0]);
        let result = new Array(queries.length).fill(Infinity);
        let i=0;
        for(const query of queries){
            for(const [start,end] of intervals){
                 if(start<=query && query<=end ){
                    let res = end-start+1;
                    result[i] = Math.min(result[i],res);
                 }
           }
           i++;
        }
        let r=0
        while(r<result.length){
            if(result[r] === Infinity) result[r]=-1;
            r++
        }
        
        return result;
    }
}
