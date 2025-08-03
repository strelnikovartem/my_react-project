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
}

const gamingPlatform: Platform = {
  getOnlinePlayers: (players) => {
    return players.filter((player) => player.isOnlain);
  },
};

console.log(gamingPlatform.getOnlinePlayers(allPlayers));
