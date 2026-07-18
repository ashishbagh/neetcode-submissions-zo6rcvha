class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache= new Map();
        this.capacity= capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.cache.has(key)) return -1;
        let val = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key,val);
        return val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
       if(this.cache.has(key)){
         this.cache.delete(key);
       }
       this.cache.set(key,value);

       if(this.cache.size>this.capacity){
         let leastRecentlyUsed = this.cache.keys().next().value;
         this.cache.delete(leastRecentlyUsed)
       }

    }
} 
