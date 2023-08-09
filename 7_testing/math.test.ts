import { sum, sub } from "./math";

test("sum function testing", () => {
  expect(sum(10, 10)).toBe(20);
});

test("subt function", () => {
  expect(sub(10, 7)).toBe(3);
});
