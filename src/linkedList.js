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
    return this.list.some((l) => l.includes(value));
  }

  find(value) {
    return this.list.findIndex((l) => {
      if (l === value) {
        return true;
      } else {
        return null;
      }
    });
  }

  toString() {
    let stringed = "";
    for (const item of this.list) {
      stringed += `(${item}) -> `;
    }

    stringed += "null";

    return stringed;
  }
}
