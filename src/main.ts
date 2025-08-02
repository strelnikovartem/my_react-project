import "./style.css";
interface User {
  id: number;
  name: string;
}

const getUserNames = (users: User[]): string[] => {
  return users.map((user) => user.name);
};

const userList: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const names = getUserNames(userList);
console.log(names); // ['Alice', 'Bob', 'Charlie']

interface Order {
  username: string;
  email: string;
  total: number;
}

const order1: Order = {
  username: "string",
  email: "dd@mail.com",
  total: 2,
};
