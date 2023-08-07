class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);

    this.head = newNode;
    this.tail = this.head;
    this.lenght = 1;
  }
}

const myLinkedList = new LinkedList(4);

console.log(myLinkedList);

export default LinkedList;
