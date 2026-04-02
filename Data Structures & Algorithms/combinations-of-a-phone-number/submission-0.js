class Solution {
  /**
   * @param {string} digits
   * @return {string[]}
   */
  letterCombinations(digits) {
    if(digits.length ===0) return [];
    let map = {
      1: "",
      2: "abc",
      3: "def",
      4: "ghi",
      5: "jkl",
      6: "mno",
      7: "pqrs",
      8: "tuv",
      9: "wxyz",
    };
    let result =[];
    
    const backtrack = (i,curr) => {
      
      if(curr.length===digits.length){
        result.push(curr);; 
        return;
      };
     
      for(const c of map[digits[i]]){
        backtrack(i+1,curr+c)
      }
      return;
    };

    backtrack(0,"");

    return result;
  }
}
