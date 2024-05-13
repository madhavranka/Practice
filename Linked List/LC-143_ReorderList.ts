import { reverseList } from "./LC-206_ReverseLinkedList";
import { ListNode } from "./LC-237_DeleteNodeInALinkedList";

function reorderList(head: ListNode | null): void {
  //reverse a linked list
  let fast: ListNode | null = head;
  let slow: ListNode | null = head;

  //find the middle of the list
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow?.next ?? null;
  }
  //cut the middle of the list and reverse it
  let l2 = reverseList(slow?.next ?? null);
  if (slow) {
    slow.next = null;
    while (l2) {
      let l1Next: ListNode | null = head?.next ?? null;
      let l2Next: ListNode | null = l2.next;
      if (head) {
        head.next = l2;
        l2.next = l1Next;
        l2 = l2Next;
        head = l1Next;
      }
    }
  }
}
