let counterValue = 0;
const value = document.querySelector("#value");
console.log(value);

const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtn.dataset.action);

decrementBtn.addEventListener("click", () => {
  counterValue = counterValue - 1;
  value.innerHTML = counterValue;
});

const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(incrementBtn.dataset.action);

incrementBtn.addEventListener("click", () => {
  counterValue = counterValue + 1;
  value.innerHTML = counterValue;
});
