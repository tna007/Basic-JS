(function () {
  document.addEventListener("DOMContentLoaded", executescript);
  const users = [
    {
      name: {
        title: "mr",
        first: "brad",
        last: "gibson",
      },
      email: "brad.gibson@example.com",
      phone: "011-962-7516",
      picture: {
        large: "https://randomuser.me/api/portraits/men/75.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
      },
    },
  ];

  function executescript() {
    fetch("https://randomuser.me/api/?results=100")
      .then((resp) => resp.json())
      .then((json) => {
        json.results.forEach(addUser);
      });
  }

  function addUser(user) {
    const newEl = document.createElement("div");
    newEl.className = "user-list";
    newEl.innerHTML = `
    <div class="profile-img">
    <img src='${user.picture.large}'/>
    </div>
    <div class="lastName">${user.name.last}</div>
    <div class="firstName">${user.name.first}</div>
    <div class="email">${user.email}</div>
    <div class="phone">${user.phone}</div>
    `;
    document.getElementById("user-list").appendChild(newEl);
  }
})();
