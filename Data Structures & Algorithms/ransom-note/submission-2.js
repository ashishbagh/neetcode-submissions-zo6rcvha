class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        const mapR = this.getMap(ransomNote);
        const mapM= this.getMap(magazine);

        for(const key of Object.keys(mapR)){
            if(mapM[key] < mapR[key] || !mapM[key]) return false;
        }
        return true;
        
    }

    getMap(strs){
        let map={}
        for(const str of strs){
            if(!map[str]){
                map[str]=1;
            }else{
                map[str]+=1;
            }
        }

      return map;
    }
}
