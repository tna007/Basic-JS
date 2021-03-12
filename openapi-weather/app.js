window.addEventListener("DOMContentLoaded", console.log("hi"));
const api = {
  key: "54c55fda6a81cd006fb0e5b715b6ed8b",
  base: "https://api.openweathermap.org/data/2.5/",
};
let result = document.getElementsByClassName("result");
let searchTxt = "";
let searchInput = document.querySelector("#search-text");

searchInput.addEventListener("keypress", searchCity);

function searchCity(event) {
  if (event.keyCode == 13) {
    console.log(searchInput.value);
    getWeather(searchInput.value);
  }
}

function getWeather(city) {
  fetch(
    `${api.base}weather?q=${city}&units=metrics&appid=${api.key}`
  ).then((data) => data.json());
  console.log(data);
}
