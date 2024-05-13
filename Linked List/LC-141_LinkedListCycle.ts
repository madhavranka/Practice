import { ListNode } from "./LC-237_DeleteNodeInALinkedList";

function hasCycle(head: ListNode | null): boolean {
  let fast: ListNode | null = head;
  while (fast && fast.next) {
    head = head?.next ?? null;
    fast = fast.next.next;
    if (head === fast) {
      return true;
    }
  }
  return false;
}
