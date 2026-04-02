class TrieNode {
  constructor(currentChar) {
    this.children = {}; // Stores child nodes, keys are characters, values are TrieNode instances
    this.isEndOfWord = false; // A flag to mark the end of a complete word
    this.currentChar =currentChar;
  }
}


class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let current = this.root;

        for(let i=0;i<word.length;i++){
            let char = word[i];
            if(!current.children[char]){
                current.children[char] = new TrieNode(word[i+1]);
            }
            current = current.children[char];
        }
        current.isEndOfWord = true
        return true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let current = this.root;
        for (let char of word) {
            if(char === ".")return this.searchWithDots(word);
            if (!current.children[char]) return false;
            current = current.children[char];
        }
        return current.isEndOfWord;
    }

    searchWithDots(word){
        
        const searchAllNodes = (root, index)=>{
            if(index === word.length) return root.isEndOfWord;
        
            let char = word[index];
            let current = root;
            if(char === "."){
                for(const childChar in current.children){
                    if(searchAllNodes(current.children[childChar],index+1)) return true;
                }
                return false;
            }else{
                if(!current.children[char]) return false;
                return searchAllNodes(current.children[char],index+1)
            }
        }
        return searchAllNodes(this.root,0);
    }
}
