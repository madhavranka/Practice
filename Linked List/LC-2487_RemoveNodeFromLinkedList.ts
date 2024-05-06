function removeNodes(head: ListNode | null): ListNode | null {
  const stack: ListNode[] = [];
  let temp: ListNode | null = head;
  let result: ListNode | null = null;
  if (temp) {
    while (temp) {
      stack.push(temp);
      temp = temp.next;
    }
    result = stack.pop() ?? null;
    let max: number = result?.val ?? 0;
    while (stack.length > 0) {
      const popNode: ListNode | null = stack.pop() ?? null;
      if (popNode) {
        if (max <= popNode.val) {
          popNode.next = result;
          result = popNode;
        }
        max = Math.max(popNode.val, max);
      }
    }
  }
  return result;
}

function usingRecursion(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  let node: ListNode | null = usingRecursion(head.next);
  if (node && node.val > head.val) {
    head = null;
    return node;
  }
  head.next = node;
  return head;
}
