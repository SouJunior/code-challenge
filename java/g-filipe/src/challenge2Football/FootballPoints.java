/*
Create a function that takes the number of wins, draws and losses and calculates the number of points
 a football team has obtained so far.

> wins get 3 points
> draws get 1 point
> losses get 0 points

**Examples**
footballPoints(3, 4, 2) ➞ 13
footballPoints(5, 0, 2) ➞ 15
footballPoints(0, 0, 1) ➞ 0

**Notes**
Inputs will be numbers greater than or equal to 0.

*/

package challenge2Football;

import javax.swing.*;

public class FootballPoints {
    public static void main(String[] args) {

        int wins = Integer.parseInt(JOptionPane.showInputDialog("Number of victories:"));
        int draws = Integer.parseInt(JOptionPane.showInputDialog("Number of draws:"));
        int losses = Integer.parseInt(JOptionPane.showInputDialog("Number of losses:"));

        while (wins < 0 || draws < 0 || losses < 0) {
            if (wins < 0) {
                JOptionPane.showMessageDialog(null, "Invalid input. The number of victories cannot be" +
                        " less than 0!");
                wins = Integer.parseInt(JOptionPane.showInputDialog("Number of victories:"));
            }

            if (draws < 0) {
                JOptionPane.showMessageDialog(null, "Invalid input. The number of draws cannot be" +
                        " less than 0!");
                draws = Integer.parseInt(JOptionPane.showInputDialog("Number of draws:"));
            }

            if (losses < 0) {
                JOptionPane.showMessageDialog(null, "Invalid input. The number of losses cannot be" +
                        " less than 0!");
                losses = Integer.parseInt(JOptionPane.showInputDialog("Number of losses:"));
            }
        }

        JOptionPane.showMessageDialog(null, "Team Score: " + teamScore(wins, draws, losses));
    }

    public static int winPoints(int wins) {
        return wins * 3;
    }

    public static int drawPoints(int draws) {
        return draws;
    }

    public static int losePoints(int losses) {
        return 0;
    }

    public static int teamScore(int wins, int draws, int losses) {
        return winPoints(wins) + drawPoints(draws) + losePoints(losses);
    }
}
