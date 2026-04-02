class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
      let str2 = "";
  let str = "";
  const isValidStr = (s) => {
  return /^[a-zA-Z0-9]+$/.test(s);
};
  for (let i = 0; i < s.length; i++) {
    if (isValidStr(s[i])) {
      str2 = str2 + s[i].toLowerCase();
      str = s[i].toLowerCase() + str;
    }
  }
  return str === str2;
    }
}
