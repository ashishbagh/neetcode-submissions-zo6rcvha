class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
      let operandMap =["+","-","*","/"];
      const stack = [];

for (const token of tokens) {
    if (operandMap.includes(token)) {
      const b = stack.pop();
      const a = stack.pop();
      
      if (token === "+") stack.push(a + b);
      else if (token === "-") stack.push(a - b);
      else if (token === "*") stack.push(a * b);
      else if (token === "/") stack.push(Math.trunc(a / b)); // truncate toward zero
    } else {
      stack.push(parseInt(token));
    }
  }
  
  return stack[0];
    }
}
