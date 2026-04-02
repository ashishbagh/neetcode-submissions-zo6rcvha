class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      const map = {};
      const arr = strs;
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i].split("").sort().join("");
    if (!map[str]) {
      map[str] = [arr[i]];
    } else {
      map[str].push(arr[i]);
    }
  }
  return Object.values(map);
    }
}
