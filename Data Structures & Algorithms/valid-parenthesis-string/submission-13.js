class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  checkValidString(s) {
    let star = [];
    let stack = [];

    for (let i=0;i<s.length;i++) {
        let str = s[i]
      if (str === "(") {
        stack.push(i);
      } else if (str === "*") {
        star.push(i);
      } else {
        if (stack.length > 0) {
          stack.pop();
        } else if (star.length > 0) {
          star.pop();
        }else{
            return false
        }
      }
    }

    while (stack.length > 0 && star.length > 0) {
     if( stack.pop()>star.pop()) return false;
    }
    
    return stack.length === 0;
  }
}
