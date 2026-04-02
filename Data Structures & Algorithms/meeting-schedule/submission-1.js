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
        const arr = intervals.sort((a,b)=>a.start-b.start);
        for( let i=1;i<arr.length;i++){
            let interFirstEnd = arr[i-1].end;
            let interSecondStart = arr[i].start;
            if(interFirstEnd>interSecondStart){
                return false;
            }
        }
        return true;
    }
}
