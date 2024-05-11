import { ListNode } from "./LC-237_DeleteNodeInALinkedList";

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;
  while (curr) {
    let nextNode: ListNode | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  return prev;
}

function reverseListRecursive(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  let newHead: ListNode | null = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}
