class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {

          let res =[];
          let left=0,right=0;

          while(left<nums1.length && right<nums2.length){
            if(nums1[left]<nums2[right]){
              res.push(nums1[left]);
              left++;
            }else{
              res.push(nums2[right]);
              right++
            }
          }


          while(right < nums2.length){
             res.push(nums2[right]);
              right++;
          }
          while(left <nums1.length){
            res.push(nums1[left]);
            left++;
          }
           

        let n = res.length;
        let mid= Math.floor(n/2);
        if(n % 2===0){
        let median = (res[mid]+res[mid-1])/2;
          return median;
        }else{
          return res[mid];

        }

    }
}
