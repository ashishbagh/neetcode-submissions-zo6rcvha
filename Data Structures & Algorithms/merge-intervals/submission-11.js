class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if(intervals.length <2){
            return intervals
        }
        let sortedInt = intervals.sort((a,b)=>a[0]-b[0]);

        let result = [sortedInt[0]];
        let respointer =1;

        let pointer=1;
        while(pointer<sortedInt.length){
            // over lapping
            if(result[respointer-1][1]>=sortedInt[pointer][0]){
                // Check which interval will be at the end
                let end = Math.max(sortedInt[pointer][1],result[respointer-1][1]);
                result[respointer-1]=[result[respointer-1][0],end];
            }else{
                result.push(sortedInt[pointer]);
                respointer++;
            }
            pointer++
        }

        return result;
        
    }
}
