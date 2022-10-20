package challenge1Sum;
/*
Create a function that takes two numbers as arguments and returns their sum.

**Examples**
addition(3, 2) ➞ 5
addition(-3, -6) ➞ -9
addition(7, 3) ➞ 10
*/

import javax.swing.*;

public class SumOfTwoNumbers {
    public static void main(String[] args) {

        int number1;
        int number2;
        String answer;

        do {
            number1 = Integer.parseInt(JOptionPane.showInputDialog("Enter the first number: "));
            number2 = Integer.parseInt(JOptionPane.showInputDialog("Enter the second number: "));

            JOptionPane.showMessageDialog(null, "Result: " + addition(number1, number2));
            answer = JOptionPane.showInputDialog("Continue? S/N ");

        } while (answer.equals("S") || answer.equals("s"));
        JOptionPane.showMessageDialog(null, "Bye bye. I hope see you soon!");
    }

    public static int addition(int num1, int num2) {
        return num1 + num2;
    }
}