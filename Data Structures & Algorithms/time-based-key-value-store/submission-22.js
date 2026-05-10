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
        let arr={};
        if(this.keyStore.has(key)){
           arr = this.keyStore.get(key);
           arr[timestamp]=value;
        }
        arr[timestamp]=value;
        this.keyStore.set(key,arr);
        return value
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)) return "";
        let arr = this.keyStore.get(key);
        if(arr[timestamp] !== undefined) return arr[timestamp];
        let keys = Object.keys(arr);
        console.log(keys,timestamp);
        let r = keys.length-1;
        
        while(r>=0){
            if(parseInt(keys[r])<=timestamp){
               return arr[keys[r]];
            }
            r--;
        }
        return "";
    }
}
