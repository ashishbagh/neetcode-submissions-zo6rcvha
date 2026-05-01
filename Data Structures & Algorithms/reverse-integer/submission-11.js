class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        if(x===0) return 0;
        let a= x<1? -1:1;
        let digit=x*a;
        let res=0
        while(digit){
            let temp=(digit%10);
            res=res*10+temp;
            digit=parseInt(digit/10);
        }
        if(2147483648<res*a || res*a<-2147483648){
         return 0;
         } 
        return res*a;

    }
}
