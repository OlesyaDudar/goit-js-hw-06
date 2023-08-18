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
