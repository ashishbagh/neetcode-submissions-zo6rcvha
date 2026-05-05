class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
  const result = [];

  const bt = (start, path) => {
    if (path.length === k) {
      result.push([...path]);
      return;
    }

    for (let i = start; i <= n; i++) {
      path.push(i);
      bt(i + 1, path);
      path.pop();
    }
  };

  bt(1, []);
  return result;
}

}
