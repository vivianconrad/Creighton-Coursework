import java.util.Scanner;
class Main {
  public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    System.out.println("Enter 0 or 1 for s state:");
    int newS = s.nextInt();
    Scanner r = new Scanner(System.in);
    System.out.println("Enter 0 or 1 for r state:");
    int newR = r.nextInt();
    Scanner state = new Scanner(System.in);
    System.out.println("Enter 0 or 1 for current/previous state:");
    int previousState = state.nextInt();
    int nextState = -1;
    if(newS==0 && newR==0){
      nextState = previousState;
    }
    else if(newS==0 && newR==1){
      nextState = 0;
    }
    else if(newS==1 && newR==0){
      nextState = 1;
    }
    else{
      System.out.println("Invalid Input(s) provided");
      //nextState = null;
    }
    if(nextState != -1){
      System.out.println("The next state is:\n" + nextState);
      }
    else{
      System.out.println("Unable to produce next state, please provide valid inputs/state");
    }
  }
  
}