const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = ingredients.map(ingredient => {
  const createLi = document.createElement("li");
  createLi.classList.add("item");
  createLi.textContent = ingredient;
  return createLi;
});

const ingredientsUl = document.getElementById('ingredients');
ingredientsList.forEach(li => {
  ingredientsUl.appendChild(li);
});


console.log(ingredientsUl);

