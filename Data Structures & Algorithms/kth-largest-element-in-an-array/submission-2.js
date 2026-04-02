class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
     let arr=  this.quickSort(nums,0,nums.length-1,k)
     console.log(arr);
     return arr[nums.length-k];

    }

    quickSort(arr, from, to,k){
        if (from < to) {
          let pivotIndex = this.partition(arr, from, to);
            this.quickSort(arr, from, pivotIndex - 1);
            this.quickSort(arr, pivotIndex + 1, to);
        }
        return arr;
    }

    partition(arr, from, to){
      let left = from;
      let pivot = to;
      for (let i = from; i < to + 1; i++) {
        if (arr[i] < arr[pivot]) {
          let temp = arr[left];
          arr[left] = arr[i];
          arr[i] = temp;
          left++;
        }
      }
      // move pivot
      let temp = arr[left];
      arr[left] = arr[pivot];
      arr[pivot] = temp;
      return left;
    }

}
