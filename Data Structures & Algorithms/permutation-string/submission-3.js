class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
      let left=0;
      let arr = s1.split('');
      while(left<s2.length){
        if(arr.indexOf(s2[left]) !== -1){
          let count=left+1;
          let tempStr=s2[left];
          while(tempStr.length !== arr.length && count < s2.length){
            tempStr = tempStr+s2[count];
            count++
          }
          // console.log(tempStr);
          if(arr.sort().join('') ===  tempStr.split('').sort().join('')){
            return true
          }
        }
        left++
      }

      return false
       
    }
}
