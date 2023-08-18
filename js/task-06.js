const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  const isValid = textInput.value.length === Number(textInput.dataset.length);
  setValidClass(textInput, isValid);
});

function setValidClass(el, bool) {
  const addCls = bool ? "valid" : "invalid";
  const removeCls = bool ? "invalid" : "valid";

  el.classList.add(addCls);
  el.classList.remove(removeCls);
}
