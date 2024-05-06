class TrieNode {
  char: string;
  endOfWord: boolean;
  children: TrieNode[];
  constructor(char: string) {
    this.char = char;
    this.endOfWord = false;
    this.children = new Array(26);
  }
}
class Trie {
  children: TrieNode[];
  constructor() {
    this.children = new Array(26);
  }

  insert(word: string): void {
    const wordArr: string[] = word.split("");
    let curr: TrieNode | null = null;
    const helper = (idx: number) => {
      if (idx === wordArr.length && curr != null) {
        curr.endOfWord = true;
        return;
      }
      const index: number = wordArr[idx].charCodeAt(0) - "a".charCodeAt(0);
      if (!curr) {
        if (!this.children[index]) {
          this.children[index] = new TrieNode(wordArr[idx]);
        }
        curr = this.children[index];
      } else {
        if (!curr.children[index]) {
          curr.children[index] = new TrieNode(wordArr[idx]);
        }
        curr = curr.children[index];
      }
      helper(idx + 1);
    };
    helper(0);
  }

  search(word: string): boolean {
    const wordArr: string[] = word.split("");
    let curr: TrieNode | null = null;
    const searchHelp = (idx: number) => {
      if (idx === wordArr.length) {
        return curr?.endOfWord;
      }
      const index: number = wordArr[idx].charCodeAt(0) - "a".charCodeAt(0);
      if (!curr) {
        if (this.children[index]) {
          curr = this.children[index];
          return searchHelp(idx + 1);
        }
      } else {
        if (curr.children[index]) {
          curr = curr.children[index];
          return searchHelp(idx + 1);
        }
      }
      return false;
    };
    return searchHelp(0);
  }

  startsWith(prefix: string): boolean {
    const wordArr: string[] = prefix.split("");
    let curr: TrieNode | null = null;
    const searchStartsWith = (idx: number) => {
      if (idx === wordArr.length) {
        return true;
      }
      const index: number = wordArr[idx].charCodeAt(0) - "a".charCodeAt(0);
      if (!curr) {
        if (this.children[index]) {
          curr = this.children[index];
          return searchStartsWith(idx + 1);
        }
      } else {
        if (curr.children[index]) {
          curr = curr.children[index];
          return searchStartsWith(idx + 1);
        }
      }
      return false;
    };
    return searchStartsWith(0);
  }
}
