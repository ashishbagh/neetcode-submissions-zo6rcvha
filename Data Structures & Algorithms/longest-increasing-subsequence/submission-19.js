class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let tails=[];

        for(const num of nums){
            let left=0;
            let right=tails.length;

            while(left<right){
                let mid = parseInt((left+right)/2);
                if(tails[mid]<num){
                    left=mid+1;
                }else{
                    right=mid;
                }
            }

            tails[left]=num;
        }

        return tails.length;

    }
}
