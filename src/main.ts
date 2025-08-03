interface User {
  username: string;
  greet: (m: string) => void;
}

const jacob: User = {
  username: "Jacob",
  greet(message) {
    console.log(message);
  },
};
