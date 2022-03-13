function randomHex() {
  return "#" + Math.random().toString(16).substring(2, 8);
}

document.querySelector("button").addEventListener("click", function () {
  let randomColor = randomHex();
  document.querySelector("body").style.background = randomColor;
  document.querySelector("p").innerText = randomColor;
});
