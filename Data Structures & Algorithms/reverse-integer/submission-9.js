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
     let n = x*a;
     let res=0;
    while(n){
      let digit = n%10;
      n=parseInt(n/10);
      res=res*10+digit
    }


     if(2147483648<res*a || res*a<-2147483648){
        return 0;
     } 
     return res*a;
    }
}
