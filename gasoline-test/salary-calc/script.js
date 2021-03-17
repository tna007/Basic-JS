function calSalary() {
  event.preventDefault();
  let hours = document.getElementById("hour").value;
  console.log(hours);
  let salary = document.getElementById("hour-salary").value;
  console.log(salary);
  let result = document.getElementById("result");
  let total, extra;
  if (hours > 9) {
    extra = hours - 9;
    total = (hours - 2) * salary + salary * 0.5 * 2 + extra * 2 * salary;
  } else if (hours > 7 && hours <= 9) {
    total = (hours - 2) * salary + salary * 0.5 * 2;
  } else {
    total = hours * salary;
  }
  result.textContent = `Your salary on one day: ${total}`;
}
