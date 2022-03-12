const color = ["#C2E812", "#402039", "#E84855", "#634133", "#49111C"];

let i = 0;

document.querySelector("button").addEventListener("click", function () {
  i = i < color.length - 1 ? ++i : 0;

  document.querySelector("body").style.background = color[i];
});
