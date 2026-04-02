class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
      let str = n+"";
      let map = new Set();
      while(true){
        let res=0;
        for(let i=0;i<str.length;i++){
           let temp = str[i]*1;
           res += temp*temp
        }
        if(res === 1){
          return true;
        }
        if(!map.has(res)){
          map.add(res);
        }else{
          return false;
        }
        str=res+"";
        
      }
      


    }
}
