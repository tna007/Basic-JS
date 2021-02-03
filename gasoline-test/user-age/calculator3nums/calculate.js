function calculateNum() {
  let num1 = Number(document.querySelector("#num1").value);
  let num2 = Number(document.querySelector("#num2").value);
  let num3 = Number(document.querySelector("#num3").value);

  let sum;
  let multiplacation;
  let text;

  /* if ((num1, num2, num3 >= 0)) {
    sum = num1 + num2 + num3;
    multiplacation = num1 * num2 * num3;
  } else {
  } */
  switch ((num1, num2, num3)) {
    case 1:
      if ((num1, num2, num3 >= 0)) {
        sum = num1 + num2 + num3;
        multiplacation = num1 * num2 * num3;
      }
      return;
    case 2:
      sum = num1 + num2 + num3;
      break;
    case 3:
      text = "all neg";
      break;
    default:
      break;
  }
  sum.textContent = sum;
  multiplacation.textContent = multiplacation;
}
