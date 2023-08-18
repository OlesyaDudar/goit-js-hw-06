const changeColorBtn = document.querySelector("button.change-color");
console.log(changeColorBtn);

const textOutput = document.querySelector("span.color");

const bodyStyle = document.querySelector("body");
console.log(bodyStyle);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtn.addEventListener("click", () => {
  const backgroundColor = getRandomHexColor();
  bodyStyle.style.backgroundColor = backgroundColor;
  textOutput.textContent = backgroundColor;
});
