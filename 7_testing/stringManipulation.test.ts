import {
  reverseString,
  toUpperCase,
  toLowerCase,
  getLength,
} from "./stringManipulation";

test("reverse function testing", () => {
  expect(reverseString("hello")).toMatch("olleh");
});

test("reverse function testing", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("uppercase function", () => {
  expect(toUpperCase("richa")).toBe("RICHA");
});

test("toLowerCase function", () => {
  expect(toLowerCase("HELLO")).toBe("hello");
});

test("getLength function", () => {
  expect(getLength("hello")).toBe(5);
});
