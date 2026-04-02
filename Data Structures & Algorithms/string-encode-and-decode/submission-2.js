class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
       let res = "";
  strs.forEach((element) => {
    res = res + element.length + "#" + element;
  });
  return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
         const result = [];
  let i = 0;

  while (i < str.length) {
    // Read the length (until we hit '#')
    let j = i;
    while (str[j] !== '#') {
      j++;
    }

    const length = parseInt(str.substring(i, j), 10);

    // Extract the string of that length (starts after '#')
    const start = j + 1;
    const word = str.substring(start, start + length);
    result.push(word);

    // Move to next encoded string
    i = start + length;
  }
        return result;
    }
}
