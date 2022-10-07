package br.com.desafio2;

public class DesafioMain {

	public static void main(String[] args) {
		int firstTest = Program.footballPoints(1, 2,3);
		System.out.println("1 win, 2 draws e 3 losses = "+firstTest);
		
		int secondTest = Program.footballPoints(2, 5,0);
		System.out.println("2 wins, 5 draws e 0 losses = "+secondTest);

	}

}
