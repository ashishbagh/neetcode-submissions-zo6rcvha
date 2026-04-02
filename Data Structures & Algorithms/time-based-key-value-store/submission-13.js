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
      this.keyStore.set(key+timestamp,value);
      if(!this.keyStore.get(key)){
        let oValue ={}
        oValue[timestamp]=value;
        this.keyStore.set(key,oValue);
      }
      let refKey = this.keyStore.get(key);
      refKey[timestamp]=value;
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
      if(!this.keyStore.get(key)){
        return "";
      }
      let refKey = this.keyStore.get(key);
      if(!refKey[timestamp]){
        let keys = Object.keys(refKey);
        let right =keys.length-1;
        while(right >= 0){
          let prevKey = keys[right]
           //conso.log(prevKey);
          if(prevKey<=timestamp){
            return refKey[prevKey];
          }
          right--;
        }
         return "";
        }
      
       return refKey[timestamp];
     }
}
