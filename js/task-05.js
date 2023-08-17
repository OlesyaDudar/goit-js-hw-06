// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const textInput = document.querySelector("input#name-input");

const textOutput = document.querySelector("span#name-output");

const eventCb = (event) => {
  if (event.currentTarget.value === "") {
    textOutput.textContent = "Anonymous";
  } else {
    textOutput.textContent = event.currentTarget.value;
  }
};

textInput.addEventListener("input", eventCb);
