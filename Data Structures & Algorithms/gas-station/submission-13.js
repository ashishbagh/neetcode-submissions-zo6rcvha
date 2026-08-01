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
        let sum=0;
        let res=0

        while(i<gas.length){
            sum+=(gas[i]-cost[i]);
            if(sum<0){
                res=i+1;
                sum=0;
            }
            i++;
        }

        return res;
    }
}
