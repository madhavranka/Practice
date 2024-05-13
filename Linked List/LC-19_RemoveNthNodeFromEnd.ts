import { ListNode } from "./LC-237_DeleteNodeInALinkedList";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  for (let i = 0; i < n; i++) {
    fast = fast?.next ?? null;
  }
  if (!fast) {
    return head?.next ?? null;
  } //remove 1st node
  while (fast.next) {
    slow = slow?.next ?? null;
    fast = fast.next;
  }
  if (slow) {
    slow.next = slow?.next?.next ?? null;
  }
  return head;
}
