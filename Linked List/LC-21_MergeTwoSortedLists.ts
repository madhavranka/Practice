import { ListNode } from "./LC-237_DeleteNodeInALinkedList";

export const mergeTwoSortedLists = (
  head1: ListNode | null,
  head2: ListNode | null
) => {
  const result: ListNode = new ListNode(-1);
  let ptr: ListNode = result;
  while (head1 && head2) {
    if (head1.val < head2.val) {
      ptr.next = new ListNode(head1.val);
      head1 = head1.next;
    } else {
      ptr.next = new ListNode(head2.val);
      head2 = head2.next;
    }
    ptr = ptr.next;
  }
  ptr.next = head1 ? head1 : head2;
  return result.next;
};
