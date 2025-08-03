function myFunction<T>(value: T): T {
  return value;
}

console.log(myFunction<string>("Hello")); // "Hello"
console.log(myFunction<number>(42)); // 42
