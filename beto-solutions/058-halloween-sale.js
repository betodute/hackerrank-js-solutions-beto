function howManyGames(p, d, m, s) {
  let totalGames = 0;
  while (s >= p) {
      s -= p;
      totalGames ++;
      if (p - d >= m) {
          p -= d;
      } else {
          p = m;
      };
  };
  return totalGames;
};