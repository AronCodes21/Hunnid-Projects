let countElement = document.getElementById("count");
let addCount = document.getElementById("count-add");
let removeCount = document.getElementById("count-remove");
let resetCount = document.getElementById("count-reset");

let count = 0;

function counting() {
  addCount.addEventListener("click", () => {
    count++;
    countElement.innerHTML = count;
  });
  removeCount.addEventListener("click", () => {
    count--;
    countElement.innerHTML = count;
  });
  resetCount.addEventListener("click", () => {
    count = 0;
    countElement.innerHTML = count;
  });
}

counting();
