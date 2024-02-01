const funcLC = require('./index');

test('mergeTwoLists([1, 2, 4], [1, 3, 4]) returns [1,1,2,3,4,4]', () => {
    expect(
      funcLC(
        new ListNode(1, new ListNode(2, new ListNode(4))),
        new ListNode(1, new ListNode(3, new ListNode(4))))
    ).toEqual(
        new ListNode(
            1, new ListNode(
                1, new ListNode(
                    2, new ListNode(
                        3, new ListNode(
                            4, new ListNode(
                                4, null
                            )
                        )
                    )
                )
            )
        )
    );
});

test('mergeTwoLists([], []) returns []', () => {
    const emptyListNode = new ListNode();
    expect(funcLC(emptyListNode, emptyListNode)).toEqual(emptyListNode);
});

test('mergeTwoLists([], [0]) returns [0]', () => {
    const emptyListNode = new ListNode();
    expect(funcLC(emptyListNode, new ListNode(0, emptyListNode))).toEqual(new ListNode(0, emptyListNode));
});

function ListNode(val, next = null) {
  this.val = val;
  if (next !== null) {
    this.next = next;
  } else {
    this.next = null;
  }
  return this;
}