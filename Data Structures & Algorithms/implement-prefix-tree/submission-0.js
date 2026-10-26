class PrefixTree {
    constructor() {
        this.obj = {};
        this.end = false;
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.obj;

        for (let ch of word) {
            if (node[ch]) {
                node = node[ch];
            } else {
                node[ch] = new PrefixTree();
                node = node[ch];
            }
        }

        node.end = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.obj;

        for (let ch of word) {
            if (!node[ch]) {
                return false;
            }
            node = node[ch];
        }

        return node.end;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.obj;

        for (let ch of prefix) {
            if (!node[ch]) {
                return false;
            }
            node = node[ch];
        }

        return true;
    }
}
/*

    T
   r 
  i   
 e     


*/
