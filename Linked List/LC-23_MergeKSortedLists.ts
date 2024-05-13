import { mergeTwoSortedLists } from "./LC-21_MergeTwoSortedLists";
import { ListNode } from "./LC-237_DeleteNodeInALinkedList";

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let result: ListNode | null = null;

  for (let i = 0; i < lists.length; i++) {
    result = mergeTwoSortedLists(result, lists[i]);
  }
  return result;
}
