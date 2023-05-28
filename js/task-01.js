const body = document.querySelector('body');
const list = body.childNodes[1];
const categoriesList = list.children;
const categoriesQuantity = categoriesList.length;

categoriesList.forEach(category => {
  const categoryName = category.querySelector('h2');
  const elements = category.children;
  console.log(`Category: ${categoryName.textContent} 
Elements: ${elements.length}`);
});
