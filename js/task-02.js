const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul");

const arrayList = [];

for (let i = 0; i < ingredients.length; i = i + 1) {
  const newElement = document.createElement("li");
  newElement.classList.add("item");
  newElement.textContent = ingredients[i];

  arrayList.push(newElement);
}

list.append(...arrayList);
