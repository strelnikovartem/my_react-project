interface Players {
  username: string;
  isOnlain: boolean;
}

const allPlayers: Players[] = [
  { username: "poly", isOnlain: true },
  { username: "jacob", isOnlain: false },
  { username: "adrian", isOnlain: true },
];

interface Platform {
  getOnlinePlayers: (players: Players[]) => Players[];
  getPlayersName: (players: Players[]) => string[];
}

const gamingPlatform: Platform = {
  getOnlinePlayers: (players) => {
    return players.filter((player) => player.isOnlain);
  },
  getPlayersName: (players) => {
    return players.map((player) => player.username);
  },
};

console.log(gamingPlatform.getOnlinePlayers(allPlayers));
console.log(gamingPlatform.getPlayersName(allPlayers));
