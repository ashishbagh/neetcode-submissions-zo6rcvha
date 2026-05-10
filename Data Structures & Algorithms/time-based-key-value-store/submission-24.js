class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        let memo= new Map();
        if(this.keyStore.has(key)){
           memo = this.keyStore.get(key);
        }
        memo[timestamp]=value;
        this.keyStore.set(key,memo);
        return value
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)) return "";
        let memo = this.keyStore.get(key);
        if(memo[timestamp] !== undefined) return memo[timestamp];
        let keys = Object.keys(memo);
        let r = keys.length-1;
        while(r>=0){
            if(keys[r]<=timestamp){
               return memo[keys[r]];
            }
            r--;
        }
        return "";
    }
}
