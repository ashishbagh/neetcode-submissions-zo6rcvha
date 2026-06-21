class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let  sumGas = gas.reduce((a,b)=>a+b,0);
        let  sumCost = cost.reduce((a,b)=>a+b,0);
        if(sumGas<sumCost) return -1;

        let i=0;
        let total=0;
        let res = 0;

        while(i < gas.length){
            total+=(gas[i] - cost[i]);
            if(total<0){
                total=0;
                res=i+1;
            }
            i++
        }
        return res;
    }
}
