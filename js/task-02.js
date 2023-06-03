const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientsUl = document.getElementById('ingredients');

const ingredientsList = ingredients.map(ingredient => {
  const createLi = document.createElement('li');
  createLi.classList.add('item');
  createLi.textContent = ingredient;
  return createLi;
});

ingredientsUl.append(...ingredientsList);
