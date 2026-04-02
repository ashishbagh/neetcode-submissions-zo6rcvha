class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
      if(x===0){
        return 0;
      }
    
     let a= x<1? -1:1;
     let n = x*a+"";
     let reversed=n.split("").reverse().join("");
     if(2147483648<reversed*a || reversed*a<-2147483648){
        return 0;
     } 
     return reversed*a;
    }
}
