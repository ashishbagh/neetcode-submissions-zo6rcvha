class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
      this.cache= new Map();
      this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
      let value =  this.cache.get(key);
      if(!value) return -1;
       this.cache.delete(key);
       this.cache.set(key,value);
       return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
      if (this.cache.has(key)) {
          this.cache.delete(key);
       }
      this.cache.set(key, value);
      if (this.cache.size > this.capacity) {
        let leastReacentUsed = this.cache.keys().next().value;
        this.cache.delete(leastReacentUsed);
      }
    }
}
