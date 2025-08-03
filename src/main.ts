function myFunction<T>(value: T): T {
  return value;
}

myFunction<string>("Hello"); // "Hello"
myFunction<number>(42); // 42
