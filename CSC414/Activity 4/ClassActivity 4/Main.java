class Main {

  static String converter(String octalValue){
    
    String binaryValue = "";
    int i = 0;

    while (i < octalValue.length()){
      char c = octalValue.charAt(i);
      switch (c) {
        case '0':
          binaryValue += "000";
          break;
        case '1':
          binaryValue += "001";
          break;
        case '2':
          binaryValue += "010";
          break;
        case '3':
          binaryValue += "011";
          break;
        case '4':
          binaryValue += "100";
          break;
        case '5':
          binaryValue += "101";
          break;
        case '6':
          binaryValue += "110";
          break;
        case '7':
          binaryValue += "111";
          break;
    }
    i++;
    }
    return binaryValue;
  }

  public static void main(String[] args) {
    String octalNumber = "315";
    System.out.println("Octal To binary conversion");
    System.out.println("Octal Number: " + octalNumber);
    String result = converter(octalNumber);
    System.out.println("Binary equivalent value is: " + result);
  }
}