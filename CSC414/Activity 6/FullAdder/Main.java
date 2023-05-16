class Main {
  public void fullAdderTable() {
    boolean a,b,c, s,cr;
    int x,y,z,sum,carry;
    System.out.println("x | y | z | c | s");
    System.out.println("--|---|---|---|---");
    for(x=0;x<2;x++){
      for(y=0;y<2;y++){
        for(z=0;z<2;z++){
          a=(x==0)?false:true;    b=(y==0)?false:true; c=(z==0)?false:true;
          s=!a&&!b&&c||a&&!b&&!c||!a&&b&&!c||a&&b&&c; cr =a&&b||b&&c||a&&c;
          sum=(s==false)?0:1; carry=(cr==false)?0:1;
          System.out.println(" "+x+" | "+y+" | "+z+" |"+carry+" | "+sum);
        }
      }
    }
  }

  public static void main(String args[]){
    Main obj = new Main();
    System.out.println("\n Full Adder Truth Table\n"); obj.fullAdderTable();
  }
}