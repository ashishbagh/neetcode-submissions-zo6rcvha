class RandomizedSet {
    constructor() {
        this.store = new Map();
        this.arr = [];
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        if(this.store.has(val)) return false;
        this.store.set(val,this.arr.length);
        this.arr.push(val);
        return true;
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
        if(!this.store.has(val)) return false;
        
        let lastVal = this.arr[this.arr.length-1];
        let index = this.store.get(val);
        
        this.arr[index]=lastVal;
        this.store.set(lastVal,index);
        this.arr.pop();
        this.store.delete(val);
        return true;
    }

    /**
     * @return {number}
     */
    getRandom() {
       const n= this.arr.length-1;
       let pos = Math.floor(Math.random()*n);
       return this.arr[pos];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
