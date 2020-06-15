var num;
num = prompt("Insert value:");

if (num.length === 1) {
  document.write("The number has 1 digit");
} else if (num.length === 2) {
  document.write("The number has 2 digit");
} else {
  document.write("The number has 3 digit");
}
