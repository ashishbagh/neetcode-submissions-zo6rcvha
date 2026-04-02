class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

      let map={};
      let resultMap= Array(nums.length+1).fill([]);
      for(let i=0;i<nums.length;i++){
        resultMap[i+1]=[];
        if(!map[nums[i]]){
          map[nums[i]]=1;
        }else{
          map[nums[i]]+=1;
        }
      }
      let arr=Object.keys(map);
      arr.forEach((element)=>{
        resultMap[map[element]].push(element);
      });
      
      let res =[];
      for( let i=resultMap.length-1;i>0;i--){
        let tempArr=resultMap[i];
        for(let j=0;j<tempArr.length;j++){
            res.push(tempArr[j]);
            if(res.length === k){
              return res;
            }
        }
      }
      
      return res;
    }
}
