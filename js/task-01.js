const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItemCount = category.querySelectorAll("li").length;

  console.log(`Category: ${categoryName} \nElements: ${categoryItemCount}`);
});
