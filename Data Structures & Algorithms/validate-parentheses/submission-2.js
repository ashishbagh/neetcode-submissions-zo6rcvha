class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
      let map = new Map();
      map.set("]","[");
      map.set("}","{");
      map.set(')','(');

      let stack=[];
      for(const str of s){
        console.log(map.has(str),str)
        if(!map.has(str)){
          stack.push(str)
        }else{
          let recentStr= stack.pop();
          if(recentStr !== map.get(str)) return false;
        }
      }

      return stack.length===0;
    }
}
