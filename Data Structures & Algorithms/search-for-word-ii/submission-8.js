class Trie{
        constructor(){
            this.children={};
            this.isEnd=false;
        }
    }


class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        let w = new Set(words);
        let rows= board.length;
        let cols= board[0].length;
        let result = new Set();
        let root = new Prefix();
       
        for(const word of w){
           root.insert(word);
        }

        let visit = new Set();
        const dfs=(r,c,node,word)=>{
            if(r>=rows || c>=cols || r<0 || c<0){
                return;
            }

            let key = `${r},${c}`;
            if (visit.has(key)) return;

            let ch = board[r][c];
            if (!node.children[ch]) return;

            visit.add(key);
            word+=ch;
            node = node.children[ch]

            if(node.isEnd){
              result.add(word);
            }

            dfs(r + 1, c, node,word);
            dfs(r - 1, c, node,word);
            dfs(r, c + 1, node,word);
            dfs(r, c - 1, node,word);

            visit.delete(key);

        }


        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
              dfs(r, c, root.root,"");
            }
        }

        return [...result];
    }
    
}


class Prefix{
    constructor(){
        this.root = new Trie();
    }
    
    insert(word){
        let node = this.root;
        for(const char of word){
            if(!node.children[char]){
                node.children[char] = new Trie();
            }
            node = node.children[char];
        }
        node.isEnd=true;
    }
}
