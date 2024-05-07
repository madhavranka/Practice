import { Trie, TrieNode } from "../../Trie/LC-208_ImplementTrie";

function findWords(board: string[][], words: string[]): string[] {
  const trie: Trie = new Trie();
  words.forEach((word: string) => {
    trie.insert(word);
  });
  let result: string[] = [];
  let mp = {};
  const bfs = (row: number, col: number, curr: TrieNode | Trie | null) => {
    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[0].length ||
      board[row][col] === "$"
    ) {
      return false;
    }
    const char: string = board[row][col];
    const index: number = char.charCodeAt(0) - "a".charCodeAt(0);
    if (!curr) {
      curr = trie;
    }
    if (
      curr.children[index] &&
      curr.children[index].endOfWord &&
      !mp[curr.children[index].word]
    ) {
      mp[curr.children[index].word] = true;
      result.push(curr.children[index].word);
    }

    board[row][col] = "$";
    if (curr.children[index]) {
      bfs(row, col - 1, curr.children[index]);
      bfs(row, col + 1, curr.children[index]);
      bfs(row - 1, col, curr.children[index]);
      bfs(row + 1, col, curr.children[index]);
    }
    board[row][col] = char;
  };
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      bfs(i, j, null);
    }
  }
  return result;
}
const board: string[][] = [
  ["o", "a", "a", "n"],
  ["e", "t", "a", "e"],
  ["i", "h", "k", "r"],
  ["i", "f", "l", "v"],
];
const words: string[] = ["oath", "oat", "eat", "rain"];
console.log(findWords(board, words));
