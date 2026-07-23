class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const dist = (point) => point[0] * point[0] + point[1] * point[1];

       
       const partition = (l,r)=>{
            const pivot = dist(points[r]);
            for(let i=l;i<r;i++){
               if(dist(points[i])<pivot){
                 [points[i],points[l]] = [points[l],points[i]];
                 l++;
               }
            }
         [points[l],points[r]] = [points[r],points[l]];
         return l;
       }


       const quickSelect=(l,r)=>{
        if(l>=r) return;
        let pivot = partition(l,r);
        if(pivot === k) return;
        if(pivot>k){
            quickSelect(l,pivot-1)
        }else{
             quickSelect(pivot+1,r)
        }
       }

        quickSelect(0,points.length-1)

        return points.slice(0,k);
    }


    
}
