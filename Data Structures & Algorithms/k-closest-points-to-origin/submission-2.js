class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const dist = (point) => point[0] * point[0] + point[1] * point[1];
         
        points.sort((a,b)=>dist(a)-dist(b));

        return points.slice(0,k);
    }
}
