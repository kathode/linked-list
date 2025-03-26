import { Node } from "./node";

export class LinkedList {
  constructor() {
    this.list = [];
  }

  append(value) {
    const newNode = new Node(value);
    if (this.list.length > 0) {
      this.tail().nextNode = newNode;
    }

    this.list.push(newNode);
  }

  prepend(value) {
    this.list.unshift(new Node(value, this.head()));
  }

  size() {
    return this.list.length;
  }

  head() {
    return this.list[0];
  }

  tail() {
    return this.list[this.list.length - 1];
  }

  at(index) {
    return this.list[index];
  }

  pop() {
    this.list.pop();
  }

  contains(value) {
    return this.list.some((l) => l.value === value);
  }

  find(value) {
    return this.list.findIndex((l) => {
      if (l.value === value) {
        return true;
      } else {
        return null;
      }
    });
  }

  toString() {
    let stringed = "";
    for (const item of this.list) {
      stringed += `( ${item.value} ) -> `;
    }

    stringed += "null";

    return stringed;
  }

  insertAt(value, index) {
    const nextNode = this.list[index];
    const prevNode = this.list[index - 1];
    const newNode = new Node(value, nextNode);

    const isHead = index === 0;
    const isTail = this.size() === index;
    const outOfRange = index > this.size();

    if (isHead) {
      this.list.splice(index, 0, newNode);
    } else if (isTail) {
      prevNode.nextNode = newNode;
      this.list.splice(index, 0, new Node(value));
    } else if (outOfRange) {
      console.log("out of range error");
    } else {
      prevNode.nextNode = newNode;
      this.list.splice(index, 0, newNode);
    }
  }

  removeAt(index) {
    const nextNode = this.list[index + 1];
    const prevNode = this.list[index - 1];

    const isHead = index === 0;
    const isTail = this.size() - 1 === index;
    const outOfRange = index > this.size() - 1;

    if (isHead) {
      this.list.splice(index, 1);
    } else if (isTail) {
      this.list.splice(index, 1);
      prevNode.nextNode = null;
    } else if (outOfRange) {
      console.log("out of range error");
    } else {
      this.list.splice(index, 1);
      prevNode.nextNode = nextNode;
    }
  }
}
