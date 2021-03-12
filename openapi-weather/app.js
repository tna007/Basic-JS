const api = {
  key: "54c55fda6a81cd006fb0e5b715b6ed8b",
  base: "https://api.openweathermap.org/data/2.5/",
};
let result = document.getElementsByClassName("result");
let searchInput = document.querySelector(".search-text");
let cityName = document.getElementById("result-city");
let temp = document.querySelector(".result-temperature");
let stat = document.querySelector(".result-status");

searchInput.addEventListener("keypress", getVal);

//get input value after Enter
function getVal(e) {
  if (e.keyCode == 13) {
    // keyCode 13 is Enter key on the keyboard
    console.log(searchInput.value);
    getWeather(searchInput.value);
  }
}

function getWeather(location) {
  fetch(`${api.base}weather?q=${location}&appid=${api.key}`)
    .then((resp) => resp.json()) //Promise pending stage
    .then(displayWeather);
}

function displayWeather(data) {
  console.log(data); //access json file
  cityName.textContent = data.name;
  temp.innerHTML = `${Math.floor(data.main.temp)}<span>F</span>`;
  stat.textContent = data.weather[0].description;
}

/* const getWeather = async (location) => {
  const request = await fetch(
    `${api.base}weather?q=${location}&appid=${api.key}`
  );
  const data = await request.json();
  return data;
};

const displayWeather = async () => {
  const detail = await getWeather();
  return detail.name;
}; */
// displayWeather();
/* searchInput.addEventListener("keypress", searchCity);

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
} */
