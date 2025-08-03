// interface User {
//   username: string;
//   greet: (message: string) => void;
// }

// const jacob: User = {
//   username: "Jacob",
//   greet(message) {
//     console.log(message);
//   },
// };

interface Players {
    username: string;
    isOnlain: boolean;

}

const allPlayers: Players[] = [{username:'poly', isOnlain: true}];

interface Platform {

}

const gamingPlatform = {
  getOnlinePlayers (players) => {},
};
