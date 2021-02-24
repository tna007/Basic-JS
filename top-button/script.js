let header = document.querySelector("header");
let buttonBacktoTop = document.getElementById("BacktoTop");
let mobileButton = document.getElementById("mobilebtn");
let nav = document.querySelector("nav");
let links = document.querySelectorAll("nav ul li a");

window.onscroll = function () {
  scrollFunc();
};

const scrollFunc = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.add("bg");
    buttonBacktoTop.style.display = "block";
  } else {
    header.classList.remove("bg");
    buttonBacktoTop.style.display = "none";
  }
};

const gettoTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const mobMenu = () => {
  nav.classList.toggle("responsive");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", mobMenu);
  }
};

buttonBacktoTop.addEventListener("click", gettoTop);
mobileButton.addEventListener("click", mobMenu);
/* function headerFunc() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.style.backgroundColor = "#2324442e";
    header.style.color = "0fff";
  } else {
    header.style.backgroundColor = "184, 184, 230, 0.774";
    header.style.color = "0000";
    header.style.padding = "2rem";
  }
}
 */
