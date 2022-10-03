package br.com.desafio1;

public class DesafioMain {
	public static void main(String[] args) {
		int firstTest = SumOfTwoNumbers.sum(999, 111);
		System.out.println("999 + 111 = "+firstTest);
		
		int secondTest = SumOfTwoNumbers.sum(-100, 101);
		System.out.println("-100 + 101 = "+secondTest);
	}
}
