export function filterOutOddNumbers(arr: number[]) {
  return arr.filter((item) => item % 2 === 0);
}

export function appendToArray(arr: number[], item: number) {
  arr.push(item);
  return arr;
}
