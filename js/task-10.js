function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("div#boxes");
const numberInput = document.querySelector("div#controls>input");

function createBoxes(amount) {
  const arrBoxes = [];
  for (let i = 0; i < amount; i = i + 1) {
    const box = document.createElement("div");
    const number = 30 + i * 10;
    // box.classList.add("cls" + i);
    box.style.width = number + "px";
    box.style.height = number + "px";
    box.style.backgroundColor = getRandomHexColor();
    arrBoxes.push(box);
  }
  divBoxes.append(...arrBoxes);
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}
let el;
numberInput.addEventListener("blur", (event) => {
  el = event.currentTarget.value;

  createBtn.addEventListener("click", createBoxes(el));
  destroyBtn.addEventListener("click", destroyBoxes);
});
