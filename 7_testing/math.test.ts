import { sum, sub, multiply } from "./math";

test("sum function testing", () => {
  expect(sum(10, 10)).toBe(20);
});

test("subt function", () => {
  expect(sub(10, 7)).toBe(3);
});

test("multiply function", () => {
  expect(multiply(10, 7)).toBe(70);
});

test("divide function", () => {
  expect(multiply(6, 2)).not.toBe(10);
});
