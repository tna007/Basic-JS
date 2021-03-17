function calBMI() {
  event.preventDefault();
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let result = document.getElementById("result");
  let BMI = weight / Math.pow(height, 2);
  console.log(BMI);
  if (BMI > 30) {
    result.textContent = "Obese";
  } else if (BMI < 24.9 && BMI > 18.5) {
    result.textContent = "Normal";
  } else if (BMI < 29.9 && BMI > 24.9) {
    result.textContent = "Overweight";
  } else {
    result.textContent = "Underweight";
  }
}
