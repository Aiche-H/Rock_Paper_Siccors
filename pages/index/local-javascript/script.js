document
  .querySelector(".goToGameButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("header").classList.add("animate-sweep");
    document.querySelector("main").classList.add("animate-sweep");
    document.querySelector("footer").classList.add("animate-sweep");
    document.querySelector(".goToGameButton").classList.add("animate-sweep");
    setTimeout(function () {
      window.location.href = "./pages/game/game.html";
    }, 1000); // redirect after 1 second
  });
