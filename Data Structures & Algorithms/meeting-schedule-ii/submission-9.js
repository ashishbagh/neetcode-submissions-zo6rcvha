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
     * @returns {number}
     */
    minMeetingRooms(intervals) {

        let startArr=[];
        let endArr =[];


        for(const {start,end} of intervals){
            startArr.push(start);
            endArr.push(end);
        }
        startArr = startArr.sort((a,b)=>a-b);
        endArr = endArr.sort((a,b)=>a-b);
        let right=0;
        let left=0
        let count=0;

        while(left<startArr.length){
            if(startArr[left]>=endArr[right]){
                right++;
            }else{
                count++;
            }
            left++
        }
        
        return count;
    }
}
