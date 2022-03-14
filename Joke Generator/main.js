const jokeContainer = document.getElementById("joke");
const getBtn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.innerHTML = `${item.joke}`;
    });
};

getBtn.addEventListener("click", getJoke);
getJoke();
