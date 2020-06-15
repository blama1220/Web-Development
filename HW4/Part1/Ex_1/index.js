var num1, num2, num3;
num1 = prompt("Inserte first value:", "");
num1 = parseInt(num1);
num2 = prompt("Inserte second value:", "");
num2 = parseInt(num2);
num3 = prompt("Inserte third value:", "");
num3 = parseInt(num3);
if (num1 && num2 && num3 > 0) {
  if (num1 != num2 && num2 != num3 && num3 != num1) {
    if (num1 > num2) {
        if (num1 > num3) {
          document.write("Highest:" + num1 + "\n");
        } else {
          document.write("Highest:" + num3 + "\n");
        }
      } else {
        if (num2 > num3) {
          document.write("Highest:" + num2 + "\n");
        } else {
          document.write("Highest:" + num3 + "\n");
        }
      }
    
      if (num1 < num2) {
        if (num1 < num3) {
          document.write("Lowest:" + num1 + "\n");
        } else {
          document.write("Lowest:" + num3 + "\n");
        }
      } else {
        if (num2 < num3) {
          document.write("Lowest:" + num2 + "\n");
        } else {
          document.write("Lowest:" + num3 + "\n");
        }
      }
  }else{
    document.write("Numbers most be differents");
  }
} else {
  document.write("All numbers need to be higher than 0");
}
