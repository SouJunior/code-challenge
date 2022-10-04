package br.com.desafio2;

public class Program {

	public static int footballPoints(int wins, int draws, int losses) {
		int totalPoints = 0;
		totalPoints += wins * 3;
		totalPoints += draws;
		return totalPoints;
	}
}
