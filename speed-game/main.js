let circle = document.querySelectorAll("#light");

for (let i = 0; i < circle.length; i++) {
  circle[i].onclick = function () {
    clicked(i);
  };
}

const clicked = (i) => {
  console.log("clicked", i);
};
