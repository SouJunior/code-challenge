/*
Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.

        Examples
        area(3, 4) ➞ 12
        area(10, 11) ➞ 110
        area(-1, 5) ➞ -1
        area(0, 2) ➞ -1
*/

package challenge4AreaOfARectangle;

import javax.swing.*;


public class AreaOfARectangle {
    public static void main(String[] args) {

        int width = Integer.parseInt(JOptionPane.showInputDialog("Enter the width of the rectangle:"));
        int height = Integer.parseInt(JOptionPane.showInputDialog("Enter the height of the rectangle:"));

        JOptionPane.showMessageDialog(null, "Area of the rectangle: "
                + getAreaOfARectangle(width,height));
    }

    public static int getAreaOfARectangle(int width, int height) {
        if (width <= 0 || height <= 0) {
            return -1;
        }

        return width * height;
    }
}
