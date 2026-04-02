class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        let sortedIn = intervals.sort((a,b)=>a[0]-b[0]);
        let prevEnd=sortedIn[0][1];
        let res=0;
         
        for(let i=1;i<sortedIn.length;i++){
            let start = sortedIn[i][0];
            let end = sortedIn[i][1]
            if (start>=prevEnd){
                prevEnd = end;
            }else{
                res+=1;
                prevEnd = Math.min(end,prevEnd);
            }
        }

        return res;
    }
}
