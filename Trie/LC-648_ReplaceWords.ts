class TrieNode {
  char: string;
  endOfWord: boolean;
  word: string;
  children: TrieNode[];
  constructor(char: string, word: string) {
    this.char = char;
    this.word = word;
    this.children = new Array(26);
    this.endOfWord = false;
  }
}
function replaceWords(dictionary: string[], sentence: string): string {
  const trie: TrieNode[] = new Array(26);

  const addWordToTrie = (word: string) => {
    const wordArr: string[] = word.split("");
    const idx: number = wordArr[0].charCodeAt(0) - "a".charCodeAt(0);
    let node: TrieNode;
    if (!trie[idx]) {
      trie[idx] = new TrieNode(wordArr[0], wordArr[0]);
    }
    node = trie[idx];
    let curr: string = wordArr[0];
    for (let i = 1; i < wordArr.length; i++) {
      const char: string = wordArr[i];
      const childNodeIdx: number = char.charCodeAt(0) - "a".charCodeAt(0);
      if (!node.children[childNodeIdx]) {
        curr += char;
        const childNode: TrieNode = new TrieNode(char, curr);
        node.children[childNodeIdx] = childNode;
      }
      node = node.children[childNodeIdx];
    }
    node.endOfWord = true;
  };

  const findSmallesPrefixInTrie = (word: string) => {
    const wordArr: string[] = word.split("");
    let idx: number = wordArr[0].charCodeAt(0) - "a".charCodeAt(0);
    if (trie[idx]) {
      let node: TrieNode = trie[idx];
      if (node.endOfWord) {
        return node.word;
      } else {
        for (let i = 1; i < wordArr.length; i++) {
          idx = wordArr[i].charCodeAt(0) - "a".charCodeAt(0);
          if (node.children[idx]) {
            node = node.children[idx];
            if (node.endOfWord) {
              return node.word;
            }
          } else {
            break;
          }
        }
      }
    }
    return word;
  };
  dictionary.forEach((word: string) => {
    //add word to trie
    addWordToTrie(word);
  });
  let sentenceArr: string[] = sentence.split(" ");
  let result: string = "";
  sentenceArr.forEach((word) => {
    result += findSmallesPrefixInTrie(word) + " ";
  });
  return result.slice(0, -1);
}
