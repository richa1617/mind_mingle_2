import { appendToArray, filterOutOddNumbers } from "./array";

test("adding item to end of array", () => {
  const originalArray = [1, 2, 3];
  const itemToAdd = 4;

  const updatedArray = appendToArray(originalArray, itemToAdd);

  expect(updatedArray).toContain(itemToAdd);
});

test("filterOutOddNumbers function filters out odd numbers from an array", () => {
  const originalArray = [1, 2, 3, 4, 5, 6];
  const expectedArray = [2, 4, 6];

  const filteredArray = filterOutOddNumbers(originalArray);

  expect(filteredArray).toEqual(expectedArray);
});
