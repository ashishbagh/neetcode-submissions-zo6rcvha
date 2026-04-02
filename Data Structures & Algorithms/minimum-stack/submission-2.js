class MinStack {
    constructor() {
      this.stack=[];
      this.minStack=[];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
      let minVal = this.getMin() === undefined ? Infinity:this.getMin();
      this.minStack.push(Math.min(val,minVal));
      console.log(minVal,this.minStack);
      this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
     this.minStack.pop();
     return this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
      let n = this.stack.length;
      return this.stack[n-1];
    }

    /**
     * @return {number}
     */
    getMin() {
      let n = this.minStack.length;
      return this.minStack[n-1];
    }
}
