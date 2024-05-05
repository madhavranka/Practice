class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(node: ListNode | null): void {
  //1. Just fill all the next values in the current value till
  //the last node and delete the last node

  //2. Just fill the next value in the node to be deleted and assign
  //node's next pointer to the copy value node

  let prev: ListNode | null = node;
  if (prev != null && prev.next != null) {
    while (prev.next.next != null) {
      prev = node;
      node.val = node.next.val;
      node = node.next;
    }
    prev.val = prev.next.val;
    prev.next = null;
  }

  // node.val = node.next.val;
  // node.next = node.next.next;
}
