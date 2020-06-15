let arr = [];

let equi = 0,
  sca = 0,
  iso = 0;

for (let i = 0; i < 4; i++) {
  let triangleNum = i + 1;
  alert("Triangle " + triangleNum);

  let side1 = prompt("Side 1: ");
  let side2 = prompt("Side 2: ");
  let side3 = prompt("Side 3: ");

  if (side1 === side2 && side2 === side3) {
    arr.push("Equilateral");
    equi++;
    alert("Equilateral");
  } else if (side1 != side2 && side2 != side3) {
    arr.push("Scalene");
    sca++;
    alert("Scalene");
  } else {
    arr.push("Isosceles");
    iso++;
    alert("Isosceles");
  }
}
alert("Equilateral: " + equi + "\nScalene: " + sca + "\nIsosceles: " + iso);

let num1 = equi;
let num2 = sca;
let num3 = iso;

let min =
  num1 < num2
    ? num1 < num3
      ? "Min is Equilateral:" + equi
      : "Min is Isoceles: " + iso
    : num2 < num3
    ? "Min is Scalene: " + sca
    : "Min is Isoceles: " + iso;

alert(min);
