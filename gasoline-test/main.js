function calculate() {
  let price = Number(document.getElementById("price").value);
  let money = Number(document.querySelector("#money").value);
  let answer = document.getElementById("answer");
  let solution = document.getElementById("solution");

  let liters = Math.floor(money / price);
  let text;

  liters >= 10 ? (text = "exit") : (text = "stay");

  answer.textContent = `you can buy ${liters} liters of gas`;

  /* answer.innerHTML = money / price;
  answer.innerText = money / price;
  
  using innerHTML or innerText make your website vulnerable to hackers*/

  solution.textContent = text;
}

/* function hello() {
  alert("Hello, I'm Anh");
  intro();
}

function intro() {
  let name = prompt("what's your name?");
  greeting(name);
}

function greeting(username) {
  document.write(username);
}

hello(); */
