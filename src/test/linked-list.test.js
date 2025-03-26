import { LinkedList } from "../linkedList";

test("Append many animals", () => {
  const list = new LinkedList();

  const animals = ["dog", "cat", "parrot", "hamster", "snake", "turtle"];

  for (const animal of animals) {
    list.append(animal);
  }

  expect(list.size()).toBe(6);
  expect(list.head().value).toBe("dog");
  expect(list.tail().value).toBe("turtle");
  expect(list.at(1).value).toBe("cat");
  expect(list.contains("parrot")).toBe(true);
  expect(list.contains("parrotty")).toBe(false);
  expect(list.toString()).toBe("( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null");
});

test("Prepend some animals", () => {
  const list = new LinkedList();

  const animals = ["dog", "cat", "parrot", "hamster", "snake", "turtle"];

  for (const animal of animals) {
    list.append(animal);
  }

  list.prepend("fishy");
  list.prepend("shark");

  expect(list.size()).toBe(8);
  expect(list.head().value).toBe("shark");
  expect(list.tail().value).toBe("turtle");
  expect(list.at(3).value).toBe("cat");
  expect(list.contains("fishy")).toBe(true);
  expect(list.contains("fish")).toBe(false);
  expect(list.toString()).toBe("( shark ) -> ( fishy ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null");
});

test("Pop an animal from the end of the list", () => {
  const list = new LinkedList();

  const animals = ["dog", "cat", "parrot", "hamster", "snake", "turtle"];

  for (const animal of animals) {
    list.append(animal);
  }

  expect(list.size()).toBe(6);
  expect(list.toString()).toBe("( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null");

  list.pop();

  expect(list.size()).toBe(5);
  expect(list.toString()).toBe("( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> null");
});

test("Find an animal", () => {
  const list = new LinkedList();

  const animals = ["dog", "cat", "parrot", "hamster", "snake", "turtle"];

  for (const animal of animals) {
    list.append(animal);
  }

  expect(list.find("dog")).toBe(0);
  expect(list.find("doggy")).toBe(null);
});

test("Insert animals randomly", () => {
  const list = new LinkedList();

  const animals = ["dog", "cat", "parrot", "hamster", "snake", "turtle"];

  for (const animal of animals) {
    list.append(animal);
  }
  list.insertAt("fish", 0);
  list.insertAt("fishy", 2);
  list.insertAt("fishy", 8);
  expect(list.toString()).toBe(
    "( fish ) -> ( dog ) -> ( fishy ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> ( fishy ) -> null"
  );

  expect(list.insertAt("fishy", 10)).toBe("out of range");
});

test("Remove animals randomly", () => {
  const list = new LinkedList();

  const animals = ["dog", "cat", "parrot", "hamster", "snake", "turtle"];

  for (const animal of animals) {
    list.append(animal);
  }
  list.removeAt(0);
  list.removeAt(2);
  list.removeAt(3);
  expect(list.toString()).toBe("( cat ) -> ( parrot ) -> ( snake ) -> null");
  expect(list.removeAt(10)).toBe("out of range");
});
