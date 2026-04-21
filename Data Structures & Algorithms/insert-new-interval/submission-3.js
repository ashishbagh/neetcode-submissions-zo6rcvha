class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let result =[];
        for(let i=0;i<intervals.length;i++){
           // console.log(result);
            if(intervals[i][0]>newInterval[1]){
               result.push(newInterval);
               return [...result,...intervals.slice(i,intervals.length)];
            }else if(intervals[i][1]<newInterval[0]){
               result.push(intervals[i]);
            }else if(intervals[i][1]>=newInterval[0]){
               newInterval = [Math.min(intervals[i][0],newInterval[0]),Math.max(intervals[i][1],newInterval[1])];
            }

            console.log(newInterval)
        }
        result.push(newInterval);

        return result;
    }
}
