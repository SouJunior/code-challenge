package br.com.desafio3;

public class Challenge {
	public static int[] reverse(int[] arr) {
		int[] arraySaida = new int[arr.length];
		int x = 0;
		for(int i = arr.length - 1; i>=0; i--) {
			arraySaida[x] = arr[i];
			x++;
		}
		return arraySaida;
	}
}