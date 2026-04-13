class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let right = heights.length-1;
        let left =0;
        let max = 0;
        while(left<right){
            let output = (right-left)*Math.min(heights[left],heights[right]);
            max = Math.max(max,output);
            if(heights[left]<heights[right]) left++;
            else right--;
        }

        return max;
    }
}
