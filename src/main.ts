import "./style.css";
function sum(a: number, b: number) {
  return a + b;
}

const result = sum(5, 10); // ✅ TypeScript виведе тип як number

console.log(result);
