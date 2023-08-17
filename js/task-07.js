// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const textInput = document.querySelector("input#font-size-control");
console.log(textInput);
const textStyle = document.querySelector("span#text");
console.log(textStyle);

textInput.addEventListener("input", (event) => {
  console.log(event.currentTarget.value);

  textStyle.style.fontSize = `${event.currentTarget.value}px`;
});
