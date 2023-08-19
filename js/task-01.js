const arrCategories = document.querySelectorAll("ul#categories>li");

const quantityCategories = arrCategories.length;
console.log(`Number of categories: ${quantityCategories}`);

arrCategories.forEach((element) => {
  const nameCategory = element.querySelector("h2").textContent;
  console.log(`Category: ${nameCategory}`);

  const quantityElements = element.querySelectorAll("li").length;
  console.log(`Elements: ${quantityElements}`);
});
