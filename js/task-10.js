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
  console.log(888);
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
  console.log(999);
  divBoxes.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const inputValue = numberInput.value;
  createBoxes(inputValue);
});
destroyBtn.addEventListener("click", destroyBoxes);
