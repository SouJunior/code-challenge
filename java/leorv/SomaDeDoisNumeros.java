import java.util.Scanner;

public class SomaDeDoisNumeros {
    public static void main(String[] args) {
        if (args.length != 2) {
            System.out.println("Entrada de dados inválida.");
        }
        else {
            System.out.println(soma(Integer.parseInt(args[0]), Integer.parseInt(args[1])));
        }        
    }
    
    static int soma(int numero1, int numero2) {
        return numero1 + numero2;
    }
}
