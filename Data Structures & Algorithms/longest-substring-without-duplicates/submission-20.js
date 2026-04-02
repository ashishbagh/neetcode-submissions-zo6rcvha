class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       // code here
  let left = 0;
  let right = 1;
  let res = 0;
  let map = {};
  if (!s) {
    return s.length;
  }
  map[s[left]] = left;
  res = 1;
  while (right < s.length) {
    if (!map[s[right]]) {
      map[s[right]] = right;
      res = Math.max(res, Object.keys(map).length);
    } else {
      left = map[s[right]] + 1;
      map = {};
      map[s[left]] = left;
      right = left;
    }
    right++;
  }
  return res;
    }
}
