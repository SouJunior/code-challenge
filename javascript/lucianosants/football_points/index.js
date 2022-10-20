const calculateFootballPoints = (wins, draws, losses) => {
	const getWins = wins * 3;
	const getDraws = draws * 1;
	const getLosses = losses * 0;

	return getWins + getDraws + getLosses;
};

console.log('Resultado A: ', calculateFootballPoints(3, 4, 1));
console.log('Resultado B: ', calculateFootballPoints(5, 0, 2));
console.log('Resultado A: ', calculateFootballPoints(0, 0, 1));
