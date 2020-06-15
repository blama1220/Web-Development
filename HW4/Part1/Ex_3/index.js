let num1 = "";
let num2 = "";

document.onkeyup = function (event) {
  let number = parseInt(event.key);
  if (num1 === "") {
    num1 = number;
  } else {
    num2 = number;
    if (num1 > num2) {
      document.write("Sum: " + (num1 + num2) + "\n");
      document.write("Difference: " + (num1 - num2) + "\n");
    } else {
      document.write("Product: " + num1 * num2 + "\n");
      document.write("Division: " + (num1 / num2).toFixed(2) + "\n");
    }
  }
};
