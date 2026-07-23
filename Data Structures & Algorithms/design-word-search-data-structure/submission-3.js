class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEnd = true;
  }

  search(word) {
    const dfs=(i,node)=>{
        
        if(i=== word.length) return node.isEnd;
            
            let char = word[i];
            if(char === "."){
                for(const child of Object.values(node.children)){
                    if(dfs(i+1,child)){
                        return true;
                    }
                }

                return false
            }

            if(!node.children[char]){
                return false;
            }
           
    

        return dfs(i+1,node.children[char]);
    }

    return dfs(0,this.root);
  }
}
