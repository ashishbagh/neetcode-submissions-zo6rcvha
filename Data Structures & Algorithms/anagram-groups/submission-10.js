class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      let map={};
      let l=0;
       while(l<strs.length){
        let arr=[];
        for(const str of strs[l]){
           let index = str.charCodeAt(0)-97;
           if(!map[index]){
            while(arr[index]){
                index++
            }
            arr[index]=str
           }else{
            arr[index]=str
           }
        }
        let key = arr.join("#");
        console.log(arr,key);
        if(!map[key]){
            map[key]=[strs[l]]; 
        }else{
            map[key].push(strs[l]);
        }
        l++
       }

       return Object.values(map);
    }
}
