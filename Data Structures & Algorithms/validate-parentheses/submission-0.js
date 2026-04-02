class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
      const closeBrac = { "]": "[", "}": "{", ")": "(" };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!closeBrac[s[i]]) {
      stack.push(s[i]);
    } else {
      if (stack[stack.length - 1] === closeBrac[s[i]]) {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
  }

  return stack.length === 0;
    }
}
