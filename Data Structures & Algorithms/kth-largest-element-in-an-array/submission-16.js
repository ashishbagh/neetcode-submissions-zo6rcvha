class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
     
     return this.quickSort(nums,0,nums.length-1,nums.length-k);
       

    }

    quickSort(nums,from,to,k){
       let pivot = this.partition(nums,from,to);
       if(k<pivot){
          return this.quickSort(nums,from,pivot-1,k);
       }else if(k>pivot){
          return this.quickSort(nums,pivot+1,to,k);
       }else{
            return nums[pivot];
       }
    }

    partition(arr,left,right){
        for(let i=left;i<=right;i++){
            if(arr[i]<arr[right]){
                [arr[i],arr[left]] = [arr[left],arr[i]];
                left++;
            }
        }
        [arr[left],arr[right]] = [arr[right],arr[left]];
        return left;
    }
}
