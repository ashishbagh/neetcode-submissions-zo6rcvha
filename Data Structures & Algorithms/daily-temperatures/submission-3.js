class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = new Array(temperatures.length).fill(0);
        
        let stack=[];
        let l=0;
        while(l<temperatures.length){
            if(stack.length>0){
                let position = stack[stack.length-1];
                while(temperatures[l]>temperatures[position]){
                    stack.pop();
                    result[position]=l-position;
                    position = stack[stack.length-1];
                }
            }
            stack.push(l);
            l++;
        }

        return result;

    }
}
