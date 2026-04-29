class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if(intervals.length <2){
            return intervals
        }
        let int = intervals.sort((a,b)=>a[0]-b[0]);

        let result = [int[0]];
        let res=0;

        for(let i=1;i<int.length;i++){
            if(result[res][1]>=int[i][0]){
               result[res] = [Math.min(result[res][0],int[i][0]),Math.max(result[res][1],int[i][1])];
            }else{
                result.push(int[i]);
                res++;
            }
        }

        return result
    }
}
