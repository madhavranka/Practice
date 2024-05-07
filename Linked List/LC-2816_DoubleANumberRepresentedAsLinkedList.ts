function doubleIt(head: ListNode | null): ListNode | null {
  const stack: ListNode[] = [];
  let temp: ListNode | null = head;
  while (temp) {
    stack.push(temp);
    temp = temp.next;
  }
  let carry: number = 0;
  let result: ListNode | null = null;
  while (stack.length > 0) {
    let pop: ListNode | null = stack.pop();
    let num: number = 2 * pop.val + carry;
    carry = num > 9 ? 1 : 0;
    num = num % 10;
    pop.val = num;
    if (result) {
      pop.next = result;
    }
    result = pop;
  }
  if (carry > 0) {
    const newNode: ListNode | null = new ListNode(carry);
    newNode.next = result;
    result = newNode;
  }
  return result;
}
