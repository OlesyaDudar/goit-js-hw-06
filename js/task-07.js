const textInput = document.querySelector("input#font-size-control");

const textStyle = document.querySelector("span#text");

textInput.addEventListener("input", (event) => {
  console.log(event.currentTarget.value);

  textStyle.style.fontSize = `${event.currentTarget.value}px`;
});
