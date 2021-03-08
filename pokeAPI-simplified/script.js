const getPokeList = async () => {
  const request = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000"
  );
  const data = await request.json();
  return data.results;
};

const getPokeURL = async (newURL) => {
  const request = await fetch(newURL);
  const data = await request.json();
  return data.sprites.front_default;
};

const callPoke = async () => {
  const pokeList = await getPokeList();
  console.log("abc", pokeList);
  for (let i = 0; i < pokeList.length; i++) {
    const url = await getPokeURL(pokeList[i].url);
    console.log("bef", url);

    const poke = document.createElement("div");
    poke.className = "poke-list";
    poke.innerHTML = `<div><a href='${url}'>${pokeList[i].name}</div>`;
    document.getElementById("list").appendChild(poke);
  }
};
callPoke();

/* (function () {
  document.addEventListener("DOMContentLoaded", addAPI);
  function addAPI() {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
      .then((resp) => resp.json())
      .then((json) => {
        const data = json.results;
        data.forEach(addPoke);
        function url(obj) {
          for (let i = 0; i < obj.length; i++) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${obj[i]}`)
              .then((resp) => resp.json)
              .then((json) => {
                const newURL = json.sprites.front_default;
                console.log(newURL);
              });
          }
        }
      });
  }

  function addPoke(poke) {
    const newEl = document.createElement("div");
    newEl.className = "poke-list";
    newEl.innerHTML = `<div class='name'><a id='link' href='$'>${poke.name}</div>`;
    document.getElementById("list").appendChild(newEl);
  }
})(); */
