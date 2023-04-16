const categoriesList = document.querySelectorAll('.item');
const categoriesQuantity = categoriesList.length;
console.log(`Number of categories: ${categoriesQuantity}`);
categoriesList.forEach((category, index) => {
  const categoryName = category.querySelector('h2');
 const elements = category.querySelectorAll('li');
    console.log(`Category: ${categoryName.textContent} 
Elements: ${elements.length}`);
});


