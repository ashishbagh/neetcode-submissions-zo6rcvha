class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
        let map = {};

        for(const str of strs){
            let n = str.length-1;
            let res=[];
            while(n>=0){
                if(!res[alphabet.indexOf(str[n])]){
                   res[alphabet.indexOf(str[n])] = str[n];
                }else{
                    res[alphabet.indexOf(str[n])] = `${res[alphabet.indexOf(str[n])]}`+str[n];
                }
                n--
            }
            res = res.join('');
            if(!map[res]){
                map[res] = [str];
            }else{
                map[res].push(str);
            }
        }

        return Object.values(map);
    }
}
