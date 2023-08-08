import java.util.Scanner;

/**
 * Welcome to the Crazy Calculator! 🧙‍♂️
 * This calculator is so crazy that it solves math problems with a twist of silliness.
 * Just type in your expressions and prepare to be amazed... or at least entertained!
 * Remember, results may vary from real math. Use at your own risk!
 */
public class CrazyCalculator {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Welcome to the Crazy Calculator! 🤪");
        System.out.println("Just enter your math expressions and let the madness begin!");

        while (true) {
            System.out.print("Enter an expression (or 'exit' to quit): ");
            String input = scanner.nextLine();

            if (input.equalsIgnoreCase("exit")) {
                System.out.println("Thanks for experiencing the craziness! 🤯");
                break;
            }

            try {
                double result = calculateCrazyExpression(input);
                System.out.println("The CRAZY result is: " + result);
            } catch (Exception e) {
                System.out.println("Oops! Something went bananas 🍌: " + e.getMessage());
            }
        }

        scanner.close();
    }

    /**
     * Calculate a crazy expression.
     *
     * @param expression The expression to calculate.
     * @return The crazily calculated result.
     * @throws Exception If the calculator has lost its mind.
     */
    private static double calculateCrazyExpression(String expression) throws Exception {
        // Replace normal operations with fun alternatives
        String crazyExpression = expression
                .replace("+", " plus ")
                .replace("-", " minus ")
                .replace("*", " times ")
                .replace("/", " divided by ")
                .replace("%", " modded by ");

        // Implement the most bizarre math logic
        throw new Exception("The calculator is too overwhelmed by craziness to compute " + crazyExpression);
    }
}
