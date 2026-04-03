/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
       let  sortedInt = intervals.sort((a,b)=>a.start-b.end);
        console.log(sortedInt)

        for(let i=1;i<sortedInt.length;i++){
            console.log(sortedInt[i-1].end,sortedInt[i].start);
            if(sortedInt[i-1].end>sortedInt[i].start){
                return false;
            }
        }

        return true;
    }
}
