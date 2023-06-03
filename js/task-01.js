

const categories = document.getElementById('categories');
const categoriesList = Array.from(categories.children);
const categoriesQuantity = categoriesList.length;
console.log(`Number of categories: ${categoriesQuantity}`);


categoriesList.forEach(category => {
const categoryName = category.firstElementChild.textContent;
    const elements = category.lastElementChild.children.length;
    console.log(`Category: ${categoryName}
    Elements: ${elements}`);
  });



  