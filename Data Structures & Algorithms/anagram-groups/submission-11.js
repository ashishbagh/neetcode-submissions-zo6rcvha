class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       const map = new Map();

  for (const str of strs) {
    const count = new Array(26).fill(0);
    let l=0;
    while(l<str.length){
        let index = str[l].charCodeAt(0)-97;
        count[index]++;
        l++;
    }

    let key = count.join("#");
    if(map.has(key)){
        map.get(key).push(str);
    }else{
         map.set(key, [str]);
    }

  }

  return [...map.values()];
    }
}
