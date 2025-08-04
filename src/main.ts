function getFirstElement<T>(arr: T[]): T {
  return arr[1];
}

console.log(getFirstElement<number>([10, 20, 30]));
console.log(getFirstElement<string>(["Alice", "Bob"]));
