class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums,start=0,end=nums.length-1) {
        if(start>=end){
            return nums;
        }
        let mid = parseInt((start+end)/2);
        this.sortArray(nums,start,mid);
        this.sortArray(nums,mid+1,end);
        this.merge(nums,start,mid,end)
      

      return nums;
    }


    merge(arr,left,mid,right){
        let arrLeft = arr.slice(left,mid+1);
        let arrRight = arr.slice(mid+1,right+1);
        let leftPointer = 0;
        let rightPointer = 0;

        for(let i=left;i<=right;i++){
            if(arrLeft.length === leftPointer){
                while(rightPointer<arrRight.length){
                   arr[i] = arrRight[rightPointer];
                   rightPointer++;
                   i++; 
                }
                return;
            }
            if(arrRight.length === rightPointer){
                while(leftPointer<arrLeft.length){
                   arr[i] = arrLeft[leftPointer];
                   leftPointer++;
                   i++; 
                }
                return;
            }

            if(arrLeft[leftPointer]<arrRight[rightPointer]){
                arr[i] = arrLeft[leftPointer];
                leftPointer++;
            }else{
                arr[i] = arrRight[rightPointer];
                rightPointer++
            }  
        }
    }

    
}
