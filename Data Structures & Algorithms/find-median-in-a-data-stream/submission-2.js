class MedianFinder {
    constructor() {
        this.arr=[];
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
      this.arr.push(num);

      this.arr= this.arr.sort((a,b)=>a-b);
    }

    /**
     * @return {number}
     */
    findMedian() {
        let n = this.arr.length;
        let mid = Math.floor(n/2)
        if(n%2===0){
          return (this.arr[mid-1]+this.arr[mid])/2;
        }

        return this.arr[mid];
    }
}
