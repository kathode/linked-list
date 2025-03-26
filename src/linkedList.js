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
    return this.list.some((l) => l.value.includes(value));
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
      stringed += `(${item.value}) -> `;
    }

    stringed += "null";

    return stringed;
  }

  insertAt(value, index) {
    const nextNode = this.list[index];
    const newNode = new Node(value, nextNode);

    const isHead = index === 0;
    const isTail = this.size() === index;
    const outOfRange = index > this.size();

    if (this.size() < 1) {
      return;
    } else if (isHead) {
      this.list.splice(index, 0, newNode);
    } else if (isTail) {
      this.list[index - 1].nextNode = newNode;
      this.list.splice(index, 0, new Node(value));
    } else if (outOfRange) {
      console.log("out of range error");
    } else {
      this.list[index - 1].nextNode = newNode;
      this.list.splice(index, 0, newNode);
    }
  }
}
