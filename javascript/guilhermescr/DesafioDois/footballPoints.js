function footballPoints(wins, draws, losses) {
  let points = wins * 3 + draws * 1 + losses * 0;
  return console.log(points);
}

footballPoints(3, 4, 2);
footballPoints(5, 0, 2);
footballPoints(0, 0, 1);
