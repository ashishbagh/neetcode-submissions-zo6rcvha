class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
      let result = new Array(temperatures.length).fill(0);
    let stack = [0];

    for (let i = 1; i < temperatures.length; i++) {
      while (
        stack.length > 0 &&
        temperatures[i] > temperatures[stack[stack.length - 1]]
      ) {
        let n = stack[stack.length - 1];
        result[n] = i - n;
        stack.pop();
      }
      stack.push(i);
    }

    return result;
  }
}
